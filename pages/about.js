import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About ${siteMetadata.author}`}
        description={`About me ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            {/* <img src={siteMetadata.image} alt="avatar" className="h-48 rounded-full" /> */}
            <img src='./static/images/Frame.svg' alt="avatar" className="h-48 rounded-full neomorphic" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Software Engineer</div>
            <div className="text-gray-500 dark:text-gray-400">Persistent Systems</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} /> */}
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
              <SocialIcon kind="googleScholar" href={siteMetadata.googleScholar} />

            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              I'm Ashish Salunkhe and I'm a Software Engineer at Persistent Systems, Pune, India. My
              interests include NLP, Knowledge Graphs and Product Development. Also, keen in designing UIs.
            </p>
            <p>
            Super nerd who loves Linux and enjoys to customize all of the development environment. 
            Other interests include music, origami, reading and writing.
            </p>
            <p>
            Interested in devising a better problem-solving method for challenging tasks, and learning new technologies and tools if the need arises. 
            Open for freelance projects in areas related but not limited to Data Science. <br/>
            Here are a few technologies I've been working with recently:  
            </p>
              
            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="space-y-2 md:space-y-4">
            <ul className="md:list">
              <li>Saleforce Platform Dev</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            </div>
            <div className="pt-1 pb-0 prose dark:prose-dark max-w-none xl:col-span-2">
            <ul className="md:list">
              <li>Python</li>
              <li>Django</li>
              <li>PostgreSQL</li>
              <li>Neo4j</li>
              </ul>
            </div>
            </div>
            
            {/* <div className="pt-1">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Education
          </h1>
            </div>
            <div>
            <table className="table-auto">
            <thead>
              <tr>
                <th>Institute</th>
                <th>Program</th>
                <th>Year</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>University of Pune</td>
                <td>Bachelors of Engineering, Computer Engineering</td>
                <td>2020</td>
                <td>Pune, India</td>
              </tr>
            </tbody>
          </table>
            </div> */}
              <div>
                <img alt="My Github Stats" src="https://github-readme-stats.vercel.app/api?username=ashishsalunkhe&show_icons=true&hide_border=true"/>
                <a href="https://github.com/ashishsalunkhe"><img src="https://img.shields.io/github/followers/ashishsalunkhe?label=GitHub Followers"/></a>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
