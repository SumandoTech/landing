import SibApiV3Sdk from "sib-api-v3-sdk";

export default defineEventHandler(async (event) => {
    const { name, email, message, institution } = await readBody(event);

    if (!name || !email || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: "Faltan campos requeridos"
        });
    }

    const client = SibApiV3Sdk.ApiClient.instance;
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
        throw createError({
            statusCode: 500,
            statusMessage: "BREVO_API_KEY no está configurada"
        });
    }

    client.authentications["api-key"].apiKey = apiKey;

    const api = new SibApiV3Sdk.TransactionalEmailsApi();

    try {
        await api.sendTransacEmail({
            subject: `Nuevo contacto desde el sitio web: ${name}`,
            sender: {
                name: "Fundación Sumando Web",
                email: process.env.BREVO_SENDER_EMAIL || "contacto@fundacionsumando.cl" // Debe estar verificado en Brevo
            },
            to: [
                { email: process.env.BREVO_RECEIVER_EMAIL || "contacto@fundacionsumando.cl" } // Email donde recibirás los mensajes
            ],
            replyTo: {
                email,
                name
            },
            htmlContent: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${institution ? `<p><strong>Institución:</strong> ${institution}</p>` : ''}
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
        });

        return { ok: true, message: "Mensaje enviado correctamente" };
    } catch (error: any) {
        console.error("Error enviando email:", error);
        console.error("Error details:", JSON.stringify(error, null, 2));
        console.error("API Key configured:", !!apiKey);
        console.error("Sender email:", process.env.BREVO_SENDER_EMAIL);
        console.error("Receiver email:", process.env.BREVO_RECEIVER_EMAIL);

        throw createError({
            statusCode: 500,
            statusMessage: error.message || "Error al enviar el mensaje. Por favor, intenta nuevamente."
        });
    }
});
