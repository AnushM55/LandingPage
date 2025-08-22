export interface Post {
  slug: string
  title: string
  date: string
  content: string
}

export interface Project {
  slug: string
  title: string
  description: string
  content: string
}

export interface PageData {
  title: string
  content: string
  meta?: {
    description?: string
    keywords?: string
    author?: string
  }
}

export interface AppBindings {
  // Add Cloudflare bindings here if needed
}
