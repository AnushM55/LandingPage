import { Hono } from 'hono'
import { Layout, Content } from '../components'

const home = new Hono()

home.get('/', (c) => {
  const pageData = {
    title: 'ANUSH M',
    description: 'Anush M - Computer Science undergraduate student portfolio showcasing projects and blog posts',
    keywords: 'portfolio, computer science, programming, projects, blog',
    author: 'Anush M'
  }
  
  return c.html(
    <Layout {...pageData}>
      <Content title="ANUSH M">
        <div style="text-align:center">
          <a href="/about">whoami</a>
        </div>
        <h2>Check these out</h2>
        <ul style="list-style: disc; padding-left: 2em; margin: 0 0 1em 0;">
          <li><a href="/projects">Projects</a></li>
          <li><a href="/posts">Posts</a></li>
        </ul>
      </Content>
    </Layout>
  )
})

export default home
