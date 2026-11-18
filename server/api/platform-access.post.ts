// Checks on the results platform whether an email has access to one of its portals
// (school or examiner). It only answers yes/no: signing in always happens on the
// platform itself. Called from /plataforma.

const CONTEXTS = ['school', 'examiner'] as const
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Per-visitor limit (the platform sees every visitor behind this server's IP).
const WINDOW_MS = 60_000
const MAX_ATTEMPTS = 6
const attempts = new Map<string, number[]>()

function allow(ip: string): boolean {
    const now = Date.now()
    const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
    if (recent.length >= MAX_ATTEMPTS) {
        attempts.set(ip, recent)
        return false
    }
    recent.push(now)
    attempts.set(ip, recent)
    if (attempts.size > 5000) {
        for (const [key, list] of attempts) {
            if (!list.some((t) => now - t < WINDOW_MS)) attempts.delete(key)
        }
    }
    return true
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const email = String(body?.email ?? '').trim()
    const context = CONTEXTS.includes(body?.context) ? body.context : 'school'

    if (!EMAIL.test(email) || email.length > 190) {
        throw createError({ statusCode: 422, statusMessage: 'El correo no es válido.' })
    }
    if (!allow(getRequestIP(event, { xForwardedFor: true }) ?? 'unknown')) {
        throw createError({ statusCode: 429, statusMessage: 'Demasiados intentos. Prueba de nuevo en un minuto.' })
    }

    const platformUrl = String(useRuntimeConfig(event).public.platformUrl).replace(/\/+$/, '')

    try {
        const res = await $fetch<{ valid?: boolean }>(`${platformUrl}/api/public/results-access`, {
            method: 'POST',
            body: { email, context },
            headers: { Accept: 'application/json' },
            timeout: 10_000,
        })

        return {
            valid: res?.valid === true,
            loginUrl: res?.valid === true ? `${platformUrl}/login?email=${encodeURIComponent(email)}` : null,
        }
    } catch (error: any) {
        const status = error?.response?.status ?? error?.statusCode
        if (status === 429) {
            throw createError({ statusCode: 429, statusMessage: 'Demasiados intentos. Prueba de nuevo en un minuto.' })
        }
        console.error('platform-access: the platform did not answer', status ?? error?.message)
        throw createError({ statusCode: 502, statusMessage: 'No pudimos verificar el correo en este momento. Inténtalo de nuevo.' })
    }
})
