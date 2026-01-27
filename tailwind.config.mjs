/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Paleta de colores inspirada en las obras de Ricardo Laverde
      colors: {
        // Colores principales
        'laverde': {
          'blue': '#0066FF',      // Azul cinético (LEDs, elementos interactivos)
          'red': '#E63B2E',       // Rojo escultural (CTAs, acentos)
          'yellow': '#FFD700',    // Amarillo luz (highlights)
          'black': '#0A0A0A',     // Negro galería (fondo principal)
          'white': '#FAFAFA',     // Blanco puro (textos)
          'gray': '#1A1A1A',      // Gris metacrilato (cards, overlays)
          'gray-light': '#2A2A2A', // Gris claro (bordes, separadores)
        },
      },
      // Tipografías elegantes
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],     // Logo y títulos
        'body': ['Inter', 'system-ui', 'sans-serif'],            // Cuerpo de texto
      },
      // Animaciones personalizadas
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      // Espaciado extra para layouts de galería
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Aspect ratios para imágenes de obras
      aspectRatio: {
        'artwork': '4 / 5',
        'landscape': '16 / 10',
      },
    },
  },
  plugins: [],
}
