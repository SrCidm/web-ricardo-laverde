# Ricardo Laverde Laguna | Portfolio Web

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Portfolio web para **Ricardo Laverde Laguna**, artista contemporáneo especializado en arte cinético y esculturas lumínicas. Jávea, Alicante, España.

🌐 **Live Demo:** [ricardolaverde.com](https://ricardolaverde.com)

---

## ✨ Características

- **🎬 Hero con Stop Motion** - Animación de 25 frames controlada por scroll
- **🌍 Bilingüe (ES/EN)** - Detección automática de idioma del navegador + selector manual
- **📱 Responsive** - Diseño mobile-first optimizado para todos los dispositivos
- **🖼️ Galería con Lightbox** - 67 obras con navegación por teclado y gestos táctiles
- **⚡ Performance** - Optimizado con Astro para carga ultra rápida
- **🎨 Diseño Minimalista** - Estética elegante que destaca las obras del artista

---

## 🛠️ Tech Stack

| Tecnología | Uso |
|------------|-----|
| [Astro](https://astro.build/) | Framework principal |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos |
| [TypeScript](https://www.typescriptlang.org/) | Tipado |
| [Vercel](https://vercel.com/) | Deployment |

---

## 📁 Estructura del Proyecto

```
ricardo-laverde-web/
├── public/
│   ├── frames/              # Frames del stop motion (001-025)
│   ├── images/
│   │   ├── obras/           # 67 obras del artista
│   │   └── artist/          # Fotos del artista
│   └── fonts/               # Tipografías
├── src/
│   ├── components/
│   │   ├── Header.astro     # Navegación + menú móvil
│   │   ├── Hero.astro       # Stop motion con scroll
│   │   ├── Gallery.astro    # Grid de obras + lightbox
│   │   ├── Footer.astro     # Pie de página
│   │   └── BackgroundFrame.astro  # Fondo con último frame
│   ├── i18n/
│   │   └── ui.ts            # Sistema de traducciones ES/EN
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal
│   ├── pages/
│   │   ├── index.astro      # Homepage (ES)
│   │   ├── obras.astro      # Galería completa
│   │   ├── sobre-mi.astro   # Biografía
│   │   ├── exposiciones.astro
│   │   ├── contacto.astro
│   │   └── en/              # Páginas en inglés
│   │       ├── index.astro
│   │       ├── works.astro
│   │       ├── about.astro
│   │       ├── exhibitions.astro
│   │       └── contact.astro
│   └── styles/
│       └── global.css       # Estilos globales
├── astro.config.mjs
├── tailwind.config.mjs
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

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `ricardolaverde.vercel.app`

---

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Preview del build |
| `npm run astro` | CLI de Astro |

---

## 🎬 Configuración del Stop Motion

El Hero utiliza 25 frames que se reproducen según el scroll. Para modificar:

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
const TOTAL_FRAMES = 25;           // Número de frames
const FRAME_PREFIX = 'ezgif-frame-'; // Prefijo del nombre
const FRAME_EXTENSION = 'jpg';      // Extensión
const FRAMES_FOLDER = '/frames/';   // Carpeta
const FRAME_PADDING = 3;            // Dígitos (001, 002...)
```

---

## 🌍 Sistema de Idiomas (i18n)

### Detección automática
1. Verifica `localStorage` para preferencia guardada
2. Si no existe, detecta idioma del navegador
3. Redirige a `/en/` si el navegador está en inglés

### Añadir traducciones
Editar `src/i18n/ui.ts`:

```typescript
export const ui = {
  es: {
    'nav.works': 'Obras',
    // ...
  },
  en: {
    'nav.works': 'Works',
    // ...
  },
}
```

---

## 🖼️ Gestión de Imágenes

### Obras
- **Ubicación:** `public/images/obras/`
- **Formato:** `obra-01.jpeg`, `obra-02.jpeg`, ... `obra-67.jpeg`
- **Tamaño recomendado:** 1200x1200px mínimo

### Artista
- **Ubicación:** `public/images/artist/`
- **Archivos:** `ricardo-01.jpg`, `ricardo-02.jpg`, etc.

---

## 🎨 Paleta de Colores

Definida en `tailwind.config.mjs`:

| Color | Hex | Uso |
|-------|-----|-----|
| `laverde-black` | `#0a0a0a` | Fondo principal |
| `laverde-white` | `#f5f5f5` | Texto |
| `laverde-gray` | `#1a1a1a` | Fondos secundarios |
| `laverde-blue` | `#0066FF` | Acentos, CTAs |
| `laverde-red` | `#FF3333` | Acentos secundarios |
| `laverde-yellow` | `#FFD700` | Detalles |

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

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build manual

```bash
npm run build
# Los archivos estarán en dist/
```

---

## 📄 Licencia

Este proyecto es privado y pertenece a Ricardo Laverde Laguna. Todos los derechos reservados.

Las imágenes de las obras son propiedad intelectual del artista y no pueden ser reproducidas sin autorización.

---

## 👨‍💻 Desarrollo

Desarrollado por **Sergio Cid** - Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/srcidm)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/srcidm)

---

## 📞 Contacto

**Ricardo Laverde Laguna**
- 📍 Jávea (Xàbia), Alicante, España
- 📧 laverde
- 🌐 [ricardolaverde.vercel.app](ricardolaverde.vercel.app)