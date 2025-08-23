import type { FC, PropsWithChildren } from 'hono/jsx'
import { Navigation } from './Navigation'
import { Footer } from './Footer'

interface LayoutProps extends PropsWithChildren {
  title: string
  description?: string
  keywords?: string
  author?: string
}

export const Layout: FC<LayoutProps> = ({ 
  title, 
  description = 'Anush M - personal website',
  keywords = 'computer science, programming, projects, blog',
  author = 'Anush M',
  children 
}) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:," />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title} - Portfolio</title>
        
        {/* SEO Meta Tags */}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} - Portfolio`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="" />
        <link rel="stylesheet" href="/static/style.css" />
      </head>
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <script src="/static/script.js" />
      </body>
    </html>
  )
}
