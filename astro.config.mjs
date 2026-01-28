// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricardolaverde.com',
  
  // Integraciones
  integrations: [
    tailwind(),
    react(),
    // Sitemap automático
    sitemap({
      // Configuración opcional
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
        },
      },
      // Excluir páginas si es necesario
      filter: (page) => !page.includes('/404'),
    }),
  ],
  
  // Output estático para Vercel
  output: 'static',
  
  // Configuración de build
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 4321,
    host: true,
  },
  
  // Configuración de imágenes
  image: {
    domains: [],
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  
  // Prefetch de páginas
  prefetch: {
    prefetchAll: true,
  },
});
