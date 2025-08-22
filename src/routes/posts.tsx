import { Hono } from 'hono'
import { Layout, Content, BackButton } from '../components'

const posts = new Hono()

// Posts index page
posts.get('/', (c) => {
  const pageData = {
    title: 'Posts',
    description: 'Read Anush M\'s blog posts about technology, programming, and personal insights',
    keywords: 'posts, blog, articles, technology, programming, insights',
    author: 'Anush M'
  }
  
  return c.html(
    <Layout {...pageData}>
      <Content title="Posts">
        <ul style="list-style: disc; padding-left: 2em; margin: 0 0 1em 0;">
          <li><a href="/posts/hello-world">hello world <span style="font-size: 0.9em; color: #adb5bd; margin-left: 0.5em;">2024/08/16</span></a></li>
          <li><a href="/posts/similarity">Similarity <span style="font-size: 0.9em; color: #adb5bd; margin-left: 0.5em;">2024/10/05</span></a></li>
          <li><a href="/posts/hp-battery-counterfeit-error">hp-battery-counterfeit-error<span style="font-size: 0.9em; color: #adb5bd; margin-left: 0.5em;">2025/08/11</span></a></li>
        </ul>
      </Content>
    </Layout>
  )
})

// Hello World post
posts.get('/hello-world', (c) => {
  const pageData = {
    title: 'hello world',
    description: 'My first blog post - A sample markdown post to start',
    keywords: 'first post, hello world, blog, markdown',
    author: 'Anush M'
  }
  
  return c.html(
    <Layout {...pageData}>
      <Content title="hello world">
        <BackButton />
        <h2>hello world</h2>
        <p><em>2024/08/16</em></p>
        <h3>This is my first post</h3>
        <p>A sample markdown post to start</p>
      </Content>
    </Layout>
  )
})

// Similarity post
posts.get('/similarity', (c) => {
  const pageData = {
    title: 'Similarity',
    description: 'A philosophical reflection on human connection and similarity in the digital age',
    keywords: 'similarity, human connection, philosophy, digital age, technology',
    author: 'Anush M'
  }
  
  return c.html(
    <Layout {...pageData}>
      <Content title="Similarity">
        <BackButton />
        <h2>Similarity</h2>
        <p><em>2024/10/05</em></p>
        <p>You , the reader and I are closer than ever before in human history.
        Only  constraints  are your internet speed and the render time of this site.</p>
        <p>What we know of each other is more or less the same. We share the experience of being human.
        To read , to write , to speak , to share information are some more things we might have in common. 
        We both have a rough idea of what's happening in the world at the moment. Our interpretations may vary , though , and its alright as long as we get the general idea.</p>
        <p>What we know as knowledge is stored away in the next tab. What we both don't know might be stored there or is waiting to be uploaded.</p>
        <p>We both are made of the same content. What we create is also similar,content that a human  is capable of creating. 
        In OOP terms, We are all instances of the same class, constructed with different parameters and destructed eventually. </p>
        <p>And we are getting closer to each other. </p>
        <p>Faster internet speeds , increased coverage , increased translation features emerge as I type.</p>
        <p>Much more innovation may happen before you can read this.</p>
        <p>By the time you read this,
        Hope our levels of mutual respect align on a way never seen before.</p>
        <p>Hope the conditions we live in match.</p>
        <p>Hope our differences dissolve away in the stream of time.</p>
        <p>Hope we both be kinder to each other and to others of our kind.</p>
        <p>Hope you and I would be the same one day.</p>
      </Content>
    </Layout>
  )
})

// HP Battery Counterfeit Error post
posts.get('/hp-battery-counterfeit-error', (c) => {
  const pageData = {
    title: 'hp-battery-counterfeit-error',
    description: 'How to fix HP battery counterfeit error by updating BIOS firmware using Docker and Windows',
    keywords: 'hp, battery, counterfeit error, bios, firmware, docker, windows, linux',
    author: 'Anush M'
  }
  
  return c.html(
    <Layout {...pageData}>
      <Content title="hp-battery-counterfeit-error">
        <BackButton />
        <p><em>2025/08/11</em></p>
        <p> If you get an error along the lines of "hp battery counterfeit error .." and you own a hp laptop where you have no idea where the battery is, and you have a UEFI based system, you probably have to update your BIOS firmware</p>
        <br/>
        <p> FOR A WINDOWS USER you typically already have the utils pre-installed to update device firmware. </p>
        <p> If you Dual boot with linux and windows u can just go to windows and upgrade your firmware</p>
        <p> For anyone else , HP doesnt give a fuck and you are on your own.</p>
        
        <h1> What i had to do</h1>
        <br/>
        <p> Requirements : Docker , A spare USB drive , An internet connection (to set things up initially).</p>
        <ol>
          <li> Use <a href="https://github.com/dockur/windows">dockur/windows</a> to spawn a docker container that runs windows </li>
          <li> Look up their README to set up the <a href="https://github.com/dockur/windows?tab=readme-ov-file#how-do-i-change-the-storage-location">shared folder </a>, and the <a href="https://github.com/dockur/windows?tab=readme-ov-file#how-do-i-pass-through-a-usb-device">USB device configuration </a> </li>
          <li> Download the latest BIOS-System firmware update exe file  from <a href="https://support.hp.com/us-en/drivers/laptops"> here</a>
            (looked up my device id and product name, selected windows 11 for the OS and the version) </li>
          <li> Move the exe file to the shared folder </li>
          <li> Execute the exe file after booting into the windows docker image </li>
          <li> I chose to create a bootable usb drive for bios recovery. The exe tool flashes the usb drive and loads the recovery image which you can boot to upgrade your BIOS </li>
          <li> When the process was over I had to eject the drive , poweroff , plug the device back in and select the boot from efi option, and then select the BiosUpgrade.efi file inside the HP folder  [ it might vary for you] </li>
        </ol>
        <p> The BIOS upgrade took a few minutes. When it was over the hp-battery-counterfeit-error did not show up. </p>

        <br/>
        <h1> Why</h1>
          
        <p> Cause I did not have a windows system / partition in my laptop.<br/> I also did not want to set up a windows VM and already had docker installed.<br/> I tried to execute the exe file using the <a href="https://www.hirensbootcd.org/">Hiren boot usb </a> technique but it did not detect my wifi drivers :(</p>
        <br/>
        <p> Also the many posts suggesting to extract the bin files from the exe file and move it to the kernel modules were not helpful for me.<br/> All I got was an another cryptic EFI file </p>
        
        <h1>The stuff I looked up  and didnt work </h1>
        <i>These may / may not work for you</i>
        <ol>
          <li><a href="https://wiki.archlinux.org/title/Flashing_BIOS_from_Linux"> Archwiki on flashing BIOS from linux</a></li>
          <li><a href="https://askubuntu.com/questions/539120/how-to-perform-a-hp-bios-upgrade-with-only-ubuntu">AskUbuntu thread on performing a BIOS upgrade</a></li>
          <li><a href="https://gist.github.com/eNV25/c8001491dc0440656ff7b0ae18993ba1">A gitingest article that goes over the process of modifying the files in the EFI partition</a> </li>
        </ol>
      </Content>
    </Layout>
  )
})

export default posts
