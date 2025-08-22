import { Hono } from 'hono'
import { Layout, Content, BackButton } from '../components'

const projects = new Hono()

// Projects index page
projects.get('/', (c) => {
  const pageData = {
    title: 'Projects',
    description: 'Explore Anush M\'s projects including LinkBandaid and MassMobilisationInsights',
    keywords: 'projects, linkbandaid, massmobilisation, github, portfolio',
    author: 'Anush M'
  }
  
  return c.html(
    <Layout {...pageData}>
      <Content title="Projects">
        <ul style="list-style: disc; padding-left: 2em; margin: 0 0 1em 0;">
          <li><a href="/projects/linkbandaid">LinkBandaid</a></li>
          <li><a href="/projects/massmobilisation">MassMobilisationInsights</a></li>
        </ul>
      </Content>
    </Layout>
  )
})

// LinkBandaid project page
projects.get('/linkbandaid', (c) => {
  const pageData = {
    title: 'LinkBandaid',
    description: 'LinkBandaid - A tool to fix broken links in your github repository',
    keywords: 'linkbandaid, github, broken links, tool, project',
    author: 'Anush M'
  }
  
  return c.html(
    <Layout {...pageData}>
      <Content title="LinkBandaid">
        <BackButton />
        <h2>LinkBandaid</h2>
        <p>A tool to fix broken links in your github repo</p>
        <p>Backend : <a href="https://github.com/AnushM55/linkbandaid_backend-api">https://github.com/AnushM55/linkbandaid_backend-api</a></p>
      </Content>
    </Layout>
  )
})

// MassMobilisation project page
projects.get('/massmobilisation', (c) => {
  const pageData = {
    title: 'MassMobilisationInsights',
    description: 'Interactive visualization of Mass Mobilisation data covering protest data from 162 countries between 1990 and March 2020',
    keywords: 'massmobilisation, data visualization, protests, data analysis, project',
    author: 'Anush M'
  }
  
  return c.html(
    <Layout {...pageData}>
      <Content title="MassMobilisationInsights">
        <BackButton />
        <p>Interactive visualization of Mass Mobilisation data</p>
        <h1 id="about-the-dataset">About the dataset</h1>
        <p>The dataset is sourced from <a href="https://dataverse.harvard.edu/dataverse/MMdata">Mass mobilisation data project dataverse</a> 
        It covers protest data from 162 countries between 1990 and March 2020.
        For each protest event, the project records protester demands, government responses, protest location, and protester identities.</p>
        <h1 id="what-i-did">What I did</h1>
        <h2 id="data-cleaning">Data cleaning</h2>
        <ul>
          <li>Removed NA values , removed inconsistent data</li>
          <li>Streamlined country codes : for example, Yugoslavia , which was dissolved in early nineties and Serbia , which was a country that was formed later in the same region,  contained the same country code.</li>
          <li>Removed irrelevant columns ( such as news source )</li>
        </ul>
        <h2 id="data-transformation">Data transformation</h2>
        <ul>
          <li><p>The fetched data source had 20+ columns . I transformed the big table into five different tables as a star schema.</p></li>
          <li><p>Defined relations between the five tables. Removed duplicates wherever necessary </p></li>
        </ul>
        <h2 id="data-visualization">Data visualization</h2>
        <ul>
          <li>I visualized country-wise total protestor count in a bar chart</li>
          <li>I represented year-wise protestor count in a line chart.</li>
          <li>Choosing the country in the former would affect the later</li>
        </ul>
        <h2 id="things-to-be-done">Things to be done</h2>
        <ul>
          <li>Improved visualization of other key findings such as response type for each protest</li>
          <li>Modifying data values ( from boolean to numbers ) to perform better aggregation of certain types of columns </li>
        </ul>
        <h1 id="inferences">Inferences</h1>
        <ul>
          <li>Will be updated once the project is complete</li>
        </ul>
        <h1 id="project-source">Project source</h1>
        <ul>
          <li>You can check out the project files <a href="https://github.com/AnushM55/MassMobilizationInsights">here</a></li>
        </ul>
      </Content>
    </Layout>
  )
})

export default projects
