interface ISeoOptions {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  icon?: string
  appleTitle?: string
}

export const useSeoHead = (options: ISeoOptions = {}) => {
  const defaultTitle = "Saynest Lab – AI Speaking Practice"
  const defaultDescription =
    "AI-powered speaking practice platform for language learners. Interactive conversations, feedback, and progress tracking."
  const defaultOgTitle = "Saynest Lab"
  const defaultOgDescription = "Practice speaking with AI. Smart, simple, and effective."
  const defaultOgImage = "/logo.png"
  const defaultOgType = "website"

  const defaultFavicon = "/favicon.ico"
  const defaultFavicon16 = "/favicon-16x16.png"
  const defaultFavicon32 = "/favicon-32x32.png"
  const defaultAppleTouchIcon = "/apple-touch-icon.png"

  useHead({
    title: options.title ?? defaultTitle,
    meta: [
      { name: "description", content: options.description ?? defaultDescription },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // Open Graph
      { property: "og:title", content: options.ogTitle ?? options.title ?? defaultOgTitle },
      { property: "og:description", content: options.ogDescription ?? options.description ?? defaultOgDescription },
      { property: "og:image", content: options.ogImage ?? defaultOgImage },
      { property: "og:type", content: options.ogType ?? defaultOgType },

      // Apple
      { name: "apple-mobile-web-app-title", content: options.appleTitle ?? defaultOgTitle },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: options.icon ?? defaultFavicon },
      { rel: "icon", type: "image/png", sizes: "16x16", href: defaultFavicon16 },
      { rel: "icon", type: "image/png", sizes: "32x32", href: defaultFavicon32 },
      { rel: "apple-touch-icon", href: defaultAppleTouchIcon },
    ],
  })
}
