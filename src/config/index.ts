export const config = {
  app: {
    name: 'My Hono Portfolio',
    version: '1.0.0',
    description: 'Anush M - Personal website',
    author: 'Anush M',
    url: process.env.APP_URL || 'http://localhost:3000'
  },
  seo: {
    defaultTitle: 'Anush M - Portfolio',
    defaultDescription: 'personal website showcasing projects and blog posts',
    defaultKeywords: 'computer science, programming, projects, blog',
    defaultAuthor: 'Anush M'
  },
  theme: {
    defaultTheme: 'dark', // 'dark' | 'light'
    storageKey: 'lightMode'
  }
} as const

export type Config = typeof config
