// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // URL del sitio para SEO y meta tags
  site: 'https://ricardolaverde.com',
  
  // Integraciones
  integrations: [
    tailwind(),
    react(),
  ],
  
  // Output estático para Vercel
  output: 'static',
  
  // Configuración de build
  build: {
    // Optimización de assets
    assets: '_assets',
    // Inline styles pequeños
    inlineStylesheets: 'auto',
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 4321,
    host: true,
    allowedHosts: ['.ngrok-free.dev', '.ngrok.io'],
  },
  
  // Configuración de imágenes
  image: {
    // Dominios permitidos para imágenes externas
    domains: [],
    // Servicio de optimización
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  
  // Prefetch de páginas para navegación más rápida
  prefetch: {
    prefetchAll: true,
  },
});
