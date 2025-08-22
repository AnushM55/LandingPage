export const config = {
  app: {
    name: 'My Hono Portfolio',
    version: '1.0.0',
    description: 'Anush M - Computer Science undergraduate student portfolio',
    author: 'Anush M',
    url: process.env.APP_URL || 'http://localhost:3000'
  },
  seo: {
    defaultTitle: 'Anush M - Portfolio',
    defaultDescription: 'Computer Science undergraduate student portfolio showcasing projects and blog posts',
    defaultKeywords: 'portfolio, computer science, programming, projects, blog',
    defaultAuthor: 'Anush M'
  },
  theme: {
    defaultTheme: 'dark', // 'dark' | 'light'
    storageKey: 'lightMode'
  }
} as const

export type Config = typeof config
