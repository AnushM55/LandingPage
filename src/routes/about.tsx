import { Hono } from 'hono'
import { Layout, Content } from '../components'

const about = new Hono()

about.get('/', (c) => {
  const pageData = {
    title: 'About',
    description: 'Learn more about Anush M, a Computer Science undergraduate student who loves tinkering with computers',
    keywords: 'about, computer science, student, github, linkedin, mastodon',
    author: 'Anush M'
  }
  
  return c.html(
    <Layout {...pageData}>
      <Content title="About">
        <div style="text-align:center">
          <p>I'm an Undergrad student studying at <a href="https://www.cit.edu.in/">CIT</a></p>
          <p>I like tinkering with computers</p>
          <p>Find me at <a href="https://github.com/Anushm55">Github</a> <a href="https://www.linkedin.com/in/anushm55/">LinkedIn</a> <a href="https://mastodon.online/@peepeepoopooo">Mastodon</a> </p>
          <p>This site is built using <a href="https://html.spec.whatwg.org/">HTML</a>, <a href="https://www.w3.org/TR/css/#css">CSS</a> and <a href="https://tc39.es/ecma262/multipage/#sec-intro">JavaScript</a> </p>
        </div>
      </Content>
    </Layout>
  )
})

export default about
