// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    preset: "static",
  },

  css: ["~/assets/scss/main.scss"],

  modules: ["@nuxtjs/tailwindcss"],

  components: {
    loader: false,
  },

  app: {
    pageTransition: false,
    layoutTransition: false,

    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Saynest Lab",
      meta: [
        { name: "description", content: "AI-powered speaking practice platform for language learners." },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        { property: "og:title", content: "Saynest Lab" },
        { property: "og:description", content: "AI-powered speaking practice platform for language learners." },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/logo.png" },

        { name: "apple-mobile-web-app-title", content: "Saynest Lab" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },

        { rel: "canonical", href: "https://saynestlab.com" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MN8QLRRJ');`,
        },
        {
          src: "https://kit.fontawesome.com/3e574103a5.js",
          crossorigin: "anonymous",
          defer: true,
          async: true,
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Saynest Lab",
            url: "https://saynestlab.com",
            description: "AI-powered speaking practice platform for language learners.",
            publisher: {
              "@type": "Organization",
              name: "Saynest Lab",
              logo: {
                "@type": "ImageObject",
                url: "https://saynestlab.com/logo.png",
              },
            },
          }),
        },
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN8QLRRJ"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ],
    },
  },
})
