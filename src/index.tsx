import { Hono } from 'hono'
import { logger, cors, security, errorHandler } from './middleware'
import { home, about, projects, posts } from './routes'
import { Layout, Content } from './components'
import type { AppBindings } from './types'

// Create main app with proper typing
const app = new Hono<{ Bindings: AppBindings }>()

// Apply global middleware
app.use('*', errorHandler)
app.use('*', logger)
app.use('*', cors)
app.use('*', security)

// Mount routes
app.route('/', home)
app.route('/about', about)
app.route('/projects', projects)
app.route('/posts', posts)

// 404 handler
app.notFound((c) => {
  const pageData = {
    title: 'Page Not Found',
    description: 'Page not found - 404 error',
    keywords: '404, not found, error',
    author: 'Anush M'
  }
  
  return c.html(
    <Layout {...pageData}>
      <Content title="404 - Page Not Found">
        <div style="text-align: center;">
          <p>The page you're looking for doesn't exist.</p>
          <p><a href="/">Go back home</a></p>
        </div>
      </Content>
    </Layout>
  )
})

export default app

