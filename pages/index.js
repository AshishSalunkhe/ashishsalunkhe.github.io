/* eslint-disable prettier/prettier */
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import SocialIcon from '@/components/social-icons'

const MAX_DISPLAY = 3
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        // description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <p className="text-2xl  leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
            Hello, I'm
          </p>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-9 md:text-6xl md:leading-9">
            Ashish Salunkhe
          </h1>
          <p className="text-lg leading-9 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
            <div className="flex leading-7">
            <Link
              href={'https://www.dropbox.com/s/l5xxdyxt8rp6dj4/AshishSalunkheCV.pdf?dl=0'}
              passHref>
                <button class="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">
                  <span>Resume</span>
                </button>
            </Link>
            </div>
        </div> */}
        {/* -------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">          
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          <p className="text-2xl  leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
            Hello, I'm
            </p>
          <h1 className="text-9xl font-extrabold leading-9 text-gray-100 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-9xl md:leading-9">
            <span className="neo-green">Ashish Salunkhe</span>
            
          </h1>
          <p className="text-lg leading-9 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}  @ Persistent Systems
          </p>
            <div className="flex leading-7">
            <Link
              href={'https://www.dropbox.com/s/l5xxdyxt8rp6dj4/AshishSalunkheCV.pdf?dl=0'}
              >
                <button className="bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">
                  <span>Resume</span>
                </button>
            </Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center pt-8 space-x-2">
            {/* <img src={siteMetadata.image} alt="avatar" className="h-48 rounded-full" /> */}
            <img src='./static/images/Frame.svg' alt="avatar" className="h-48 rounded-full" />

            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} />
              <SocialIcon kind="googleScholar" href={siteMetadata.googleScholar} />
            </div>
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
          </div>
       </div>
        <h3 className="text-2xl font-bold pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            Blogs
          </h3>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
