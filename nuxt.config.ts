import tailwindcss from "@tailwindcss/vite";
import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  // Nuxt Config
  ssr: true,
  compatibilityDate: '2024-11-01',
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
    'v-gsap-nuxt',
    '@nuxtjs/seo'
  ],

  // SEO Config
  site: {
    url: 'https://virz-portfolio.vercel.app',
    name: 'Virz - Portfolio | Web Developer',
    description: 'A portfolio website for Virz, an enthusiast web developer with Vue & Nuxt. Contact me for collab and work together.',
    defaultLocale: 'en'
  },
  schemaOrg: {
    identity: definePerson({
      name: 'Virgi Putra Riyadi',
      givenName: 'Virgi',
      alternateName: 'Virz',

      // Profile Information, if applicable
      image: '/profile-photo.jpg',
      description: 'Software engineer with a passion for web development and design.',

      // Contact & Social Information
      email: 'virgiriyadi2404@gmail.com',
      url: 'virz-portfolio.vercel.app',
      sameAs: [
        'https://github.com/Virz12',
        'https://www.instagram.com/isthiszain_',
        'https://www.facebook.com/isthis.zain'
      ],
    })
  },
  ogImage: {
    enabled: false
  },

  // Nodemailer Config
  runtimeConfig: {
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS
  },

  // Tailwind CSS Config
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  vgsap: {
    presets: [],
    breakpoint: 768,
    composable: false
  }
})