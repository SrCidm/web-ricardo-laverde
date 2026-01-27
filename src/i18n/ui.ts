// Sistema de internacionalización para Ricardo Laverde Web
// Idiomas: Español (default) | English

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.works': 'Obras',
    'nav.about': 'Sobre Mí',
    'nav.exhibitions': 'Exposiciones',
    'nav.contact': 'Contacto',

    // Hero
    'hero.subtitle': 'Artista Contemporáneo',
    'hero.cta': 'Explorar Obras',

    // Secciones
    'works.title': 'Obras',
    'works.subtitle': 'Una exploración del espacio, la luz y la forma',
    'works.viewAll': 'Ver todas las obras',
    'works.filter.all': 'Todas',
    'works.filter.sculpture': 'Esculturas',
    'works.filter.kinetic': 'Arte Cinético',
    'works.filter.light': 'Luz y LED',

    // About
    'about.title': 'Sobre el Artista',
    'about.quote': '"Sueño puntos en el espacio y los conecto con líneas virtuales"',
    'about.bio.intro': 'Ricardo Laverde es un escultor contemporáneo especializado en arte cinético y obras lumínicas.',
    'about.bio.philosophy': 'Su trabajo explora la intersección entre la luz, el espacio y los materiales transparentes, creando piezas que desafían la percepción visual.',
    'about.readMore': 'Conocer más',

    // Exposiciones
    'exhibitions.title': 'Exposiciones',
    'exhibitions.upcoming': 'Próximas',
    'exhibitions.past': 'Anteriores',

    // Contacto
    'contact.title': 'Contacto',
    'contact.subtitle': 'Para consultas sobre obras, exposiciones o colaboraciones',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.location': 'Jávea (Xàbia), Alicante, España',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.design': ' ',

    // Misc
    'language.switch': 'EN',
    'loading': 'Cargando...',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.works': 'Works',
    'nav.about': 'About',
    'nav.exhibitions': 'Exhibitions',
    'nav.contact': 'Contact',

    // Hero
    'hero.subtitle': 'Contemporary Artist',
    'hero.cta': 'Explore Works',

    // Sections
    'works.title': 'Works',
    'works.subtitle': 'An exploration of space, light and form',
    'works.viewAll': 'View all works',
    'works.filter.all': 'All',
    'works.filter.sculpture': 'Sculptures',
    'works.filter.kinetic': 'Kinetic Art',
    'works.filter.light': 'Light & LED',

    // About
    'about.title': 'About the Artist',
    'about.quote': '"I dream of points in space and connect them with virtual lines"',
    'about.bio.intro': 'Ricardo Laverde is a contemporary sculptor specializing in kinetic art and light-based works.',
    'about.bio.philosophy': 'His work explores the intersection between light, space and transparent materials, creating pieces that challenge visual perception.',
    'about.readMore': 'Learn more',

    // Exhibitions
    'exhibitions.title': 'Exhibitions',
    'exhibitions.upcoming': 'Upcoming',
    'exhibitions.past': 'Past',

    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'For inquiries about works, exhibitions or collaborations',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.location': 'Jávea (Xàbia), Alicante, Spain',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.design': ' ',

    // Misc
    'language.switch': 'ES',
    'loading': 'Loading...',
  },
} as const;

// Función helper para obtener traducciones
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

// Helper para generar rutas en el idioma correcto
export function getLocalizedPath(path: string, lang: keyof typeof languages) {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
