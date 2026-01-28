# Ricardo Laverde Laguna | Portfolio Web

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Canvas API](https://img.shields.io/badge/Canvas_API-Native-green?style=for-the-badge)

Portfolio web para **Ricardo Laverde Laguna**, artista contemporáneo especializado en arte cinético y esculturas lumínicas. Jávea, Alicante, España.

🌐 **Live Demo:** [ricardolaverde.vercel.app](https://ricardolaverde.vercel.app)

---

## ✨ Características

- **🎬 Hero con Stop Motion** - Animación de 25 frames controlada por scroll usando Canvas API nativo (sin librerías externas)
- **🌍 Bilingüe (ES/EN)** - Sistema i18n custom con detección automática de idioma del navegador
- **📱 Responsive** - Diseño mobile-first optimizado para todos los dispositivos
- **🖼️ Galería con Lightbox** - 67 obras con navegación por teclado y gestos táctiles
- **⚡ Performance** - Optimizado con Astro SSG para carga ultra rápida
- **🎨 Diseño Minimalista** - Estética elegante que destaca las obras del artista
- **📧 Formulario de Contacto** - Integrado con Web3Forms (sin backend propio)

---

## 🛠️ Tech Stack

| Tecnología | Uso |
|------------|-----|
| [Astro](https://astro.build/) | Framework principal (SSG) |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos utility-first |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático |
| [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) | Animación stop motion (nativo) |
| [Web3Forms](https://web3forms.com/) | Formulario de contacto |
| [Vercel](https://vercel.com/) | Deployment |

---

## 🎬 Stop Motion con Canvas API (Sin Librerías)

El Hero utiliza **Canvas API nativo del navegador** para crear una animación stop motion controlada por scroll. **No se utilizan librerías externas** como GSAP, Three.js, Lottie o similares.

### ¿Cómo funciona?

```
Usuario hace scroll → Calculamos progreso (0-100%) → Renderizamos frame correspondiente en Canvas
```

### Características técnicas:

| Característica | Implementación |
|----------------|----------------|
| **Renderizado** | Canvas 2D Context (`getContext('2d')`) |
| **Optimización** | `requestAnimationFrame` + throttling |
| **Preload** | Todas las imágenes se cargan al inicio |
| **Escalado** | Cover fit automático (siempre cubre el viewport) |
| **Sin parpadeo** | Canvas evita el reflow del DOM |

### Flujo del código:

```javascript
// 1. Crear canvas y obtener contexto
const canvas = document.getElementById('stopmotion-canvas');
const ctx = canvas.getContext('2d', { alpha: false });

// 2. Precargar todas las imágenes
const images = [];
frameUrls.forEach((url, i) => {
  const img = new Image();
  img.src = url;
  images[i] = img;
});

// 3. En cada scroll, calcular qué frame mostrar
function updateScroll() {
  const progress = scrollY / maxScroll; // 0 a 1
  const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));
  
  // 4. Renderizar en el canvas (cover fit)
  ctx.drawImage(images[frameIndex], x, y, width, height);
}

// 5. Optimizar con requestAnimationFrame
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateScroll();
      ticking = false;
    });
    ticking = true;
  }
});
```

### ¿Por qué Canvas en lugar de otras alternativas?

| Método | Pros | Contras |
|--------|------|---------|
| Cambiar `img.src` | Simple | Parpadeo, reflow del DOM |
| CSS `background-image` | Fácil | Sin control preciso del timing |
| Video HTML5 | Nativo | Difícil sincronizar con scroll |
| **Canvas API** ✅ | Sin parpadeo, control total, mejor performance | Más código |
| Librerías (GSAP/Lottie) | Fácil de usar | Dependencias, bundle más grande |

### Ubicación de frames

```
public/frames/
├── ezgif-frame-001.jpg
├── ezgif-frame-002.jpg
├── ...
└── ezgif-frame-025.jpg
```

### Configuración en `Hero.astro`

```javascript
const TOTAL_FRAMES = 25;            // Número total de frames
const FRAME_PREFIX = 'ezgif-frame-'; // Prefijo del nombre de archivo
const FRAME_EXTENSION = 'jpg';       // Extensión de archivo
const FRAMES_FOLDER = '/frames/';    // Carpeta en public/
const FRAME_PADDING = 3;             // Dígitos con padding (001, 002...)
```

---

## 📁 Estructura del Proyecto

```
ricardo-laverde-web/
├── public/
│   ├── frames/              # 25 frames del stop motion
│   ├── images/
│   │   ├── obras/           # 67 obras del artista (.jpeg)
│   │   └── artist/          # Fotos del artista (.jpg)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro     # Navegación + menú móvil
│   │   ├── Hero.astro       # Stop motion con Canvas API
│   │   ├── Gallery.astro    # Grid de obras + lightbox
│   │   ├── Footer.astro     # Pie de página
│   │   └── BackgroundFrame.astro  # Fondo con último frame
│   ├── i18n/
│   │   └── ui.ts            # Sistema de traducciones ES/EN
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal + SEO
│   ├── pages/
│   │   ├── index.astro      # Homepage (ES)
│   │   ├── obras.astro      # Galería completa
│   │   ├── sobre-mi.astro   # Biografía del artista
│   │   ├── exposiciones.astro
│   │   ├── contacto.astro   # Formulario Web3Forms
│   │   ├── 404.astro        # Página de error personalizada
│   │   └── en/              # Páginas en inglés
│   │       ├── index.astro
│   │       ├── works.astro
│   │       ├── about.astro
│   │       ├── exhibitions.astro
│   │       └── contact.astro
│   ├── lib/
│   │   └── utils.ts         # Utilidad cn() para clases
│   └── styles/
│       └── global.css       # Estilos globales + Tailwind
├── .env.example             # Variables de entorno (template)
├── astro.config.mjs         # Configuración de Astro + Sitemap
├── tailwind.config.mjs      # Configuración de Tailwind
├── tsconfig.json
└── package.json
```

---

## 🚀 Instalación

### Requisitos
- Node.js 18+
- npm o pnpm

### Pasos

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/ricardo-laverde-web.git

# Entrar al directorio
cd ricardo-laverde-web

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env y añadir tu Web3Forms Access Key

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

---

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Preview del build localmente |
| `npm run astro` | CLI de Astro |

---

## 🌍 Sistema de Idiomas (i18n)

Sistema custom sin dependencias externas.

### Detección automática
1. Verifica `localStorage` para preferencia guardada del usuario
2. Si no existe, detecta idioma del navegador (`navigator.language`)
3. Redirige a `/en/` si el navegador está configurado en inglés

### Estructura de rutas

| Español (default) | English |
|-------------------|---------|
| `/` | `/en/` |
| `/obras` | `/en/works` |
| `/sobre-mi` | `/en/about` |
| `/exposiciones` | `/en/exhibitions` |
| `/contacto` | `/en/contact` |

### Añadir/editar traducciones

Editar `src/i18n/ui.ts`:

```typescript
export const ui = {
  es: {
    'nav.works': 'Obras',
    'nav.about': 'Sobre Mí',
    // ...
  },
  en: {
    'nav.works': 'Works',
    'nav.about': 'About',
    // ...
  },
}
```

---

## 🖼️ Gestión de Imágenes

### Obras de arte
- **Ubicación:** `public/images/obras/`
- **Formato:** `obra-01.jpeg`, `obra-02.jpeg`, ... `obra-67.jpeg`
- **Tamaño recomendado:** 1200x1200px mínimo
- **Total:** 67 obras

### Fotos del artista
- **Ubicación:** `public/images/artist/`
- **Archivos:** `ricardo-01.jpg`, `ricardo-02.jpg`, `ricardo-03.jpg`, `ricardo-04.jpg`

### Frames del stop motion
- **Ubicación:** `public/frames/`
- **Formato:** `ezgif-frame-001.jpg` a `ezgif-frame-025.jpg`
- **Tamaño recomendado:** 1920x1080px o superior
- **Cómo crear:** Exportar GIF/video como secuencia de imágenes con [ezgif.com](https://ezgif.com)

---

## 🎨 Paleta de Colores

Definida en `tailwind.config.mjs`:

| Variable | Hex | Uso |
|----------|-----|-----|
| `laverde-black` | `#0A0A0A` | Fondo principal |
| `laverde-white` | `#FAFAFA` | Texto principal |
| `laverde-gray` | `#1A1A1A` | Fondos secundarios |
| `laverde-gray-light` | `#2A2A2A` | Bordes, separadores |
| `laverde-blue` | `#0066FF` | Acentos, enlaces, LEDs |
| `laverde-red` | `#E63B2E` | CTAs, botones primarios |
| `laverde-yellow` | `#FFD700` | Highlights, detalles |

---

## 📱 Responsive Breakpoints

| Breakpoint | Tamaño | Dispositivo |
|------------|--------|-------------|
| `sm` | 640px | Móvil grande |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Desktop grande |

---

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio en [vercel.com](https://vercel.com)
2. Añade la variable de entorno `PUBLIC_WEB3FORMS_ACCESS_KEY`
3. Deploy automático en cada push

O con CLI:

```bash
npm i -g vercel
vercel --prod
```

### Build manual

```bash
npm run build
# Los archivos estáticos estarán en dist/
```

---

## 🗺️ SEO

- **Sitemap automático:** Generado con `@astrojs/sitemap` en `/sitemap-index.xml`
- **Meta tags:** Open Graph, Twitter Cards
- **hreflang:** Alternativas de idioma para Google
- **Página 404:** Personalizada y bilingüe

---

## 📄 Licencia

Este proyecto es privado y pertenece a **Ricardo Laverde Laguna**. Todos los derechos reservados.

Las imágenes de las obras son propiedad intelectual del artista y no pueden ser reproducidas sin autorización expresa.

---

## 👨‍💻 Desarrollo

Desarrollado por **Sergio Cid** - Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/srcidm)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/srcidm)

---

## 📞 Contacto

**Ricardo Laverde Laguna**
- 📍 Jávea (Xàbia), Alicante, España
- 📧 laverdelaguna633@gmail.com
- 📸 [@ricardolaverdel](https://instagram.com/ricardolaverdel)
- 🌐 [ricardolaverde.vercel.app](https://ricardolaverde.vercel.app)