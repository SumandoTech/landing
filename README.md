# Fundación Sumando - Website

Website moderno y responsivo para la Fundación Sumando, construido con Nuxt 4, Tailwind CSS y Preline.co.

## 🚀 Tecnologías

- **Nuxt 4** - Framework Vue.js para aplicaciones web modernas
- **Tailwind CSS** - Framework CSS utility-first
- **Preline.co** - Componentes UI pre-construidos
- **TypeScript** - Tipado estático para JavaScript

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🎨 Características

- ✅ Diseño moderno y responsivo tipo agencia
- ✅ Hero section con animaciones y gradientes
- ✅ Carrusel infinito de logos de clientes
- ✅ Sección de programas con iconos SVG
- ✅ 3 Banners personalizados con diferentes diseños
- ✅ Navegación sticky con menú móvil
- ✅ Footer completo con información de contacto
- ✅ Colores personalizados basados en el logo de Sumando
- ✅ Optimizado para SEO
- ✅ Fuente Inter de Google Fonts

## 🎨 Paleta de Colores

Los colores están basados en el isologo de Sumando:

- **Primary (Naranja)**: #e24015 - Representa energía y pasión
- **Secondary (Azul)**: #0284c7 - Representa confianza y profesionalismo

## 📁 Estructura del Proyecto

```
website/
├── app/
│   └── app.vue              # Componente principal de la aplicación
├── assets/
│   ├── css/
│   │   └── main.css         # Estilos globales con Tailwind
│   ├── clientes/            # Logos de clientes
│   └── *.png                # Logos de Sumando
├── components/
│   ├── Navigation.vue       # Navegación principal
│   ├── HeroSection.vue      # Sección hero
│   ├── ClientCarousel.vue   # Carrusel de clientes
│   ├── ProgramsSection.vue  # Sección de programas
│   ├── BannerEducation.vue  # Banner de educación
│   ├── BannerCommunity.vue  # Banner de desarrollo comunitario
│   ├── BannerCTA.vue        # Banner de llamado a la acción
│   └── Footer.vue           # Footer del sitio
├── plugins/
│   └── preline.client.ts    # Plugin de Preline
├── public/
│   ├── assets/              # Assets públicos
│   └── images/              # Imágenes del sitio
├── nuxt.config.ts           # Configuración de Nuxt
├── tailwind.config.ts       # Configuración de Tailwind
└── package.json

```

## 🖼️ Imágenes

Las imágenes de los banners son placeholders que puedes reemplazar:

- `/public/images/hero-image.jpg` - Imagen principal del hero
- `/public/images/banner-education.jpg` - Banner de educación
- `/public/images/banner-community.jpg` - Banner de desarrollo comunitario

## 🔧 Personalización

### Cambiar colores

Edita el archivo `tailwind.config.ts` para modificar los colores primarios y secundarios.

### Agregar/Modificar secciones

Los componentes están en la carpeta `components/`. Cada sección es un componente Vue independiente que puedes modificar o reemplazar.

### Modificar contenido

El contenido principal está en `app/app.vue` y en cada componente individual.

## 📱 Responsividad

El sitio está completamente optimizado para:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🌐 Navegación

El sitio incluye navegación por anclas (#) a diferentes secciones:
- `#nosotros` - Sección sobre nosotros
- `#programas` - Programas de la fundación
- `#impacto` - Impacto y resultados
- `#contacto` - Información de contacto
- `#donar` - Llamado a la acción para donar

## 📄 Licencia

© 2025 Fundación Sumando. Todos los derechos reservados.
