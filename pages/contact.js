/* eslint-disable prettier/prettier */
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function contact() {
  return (
    // <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
    //   <div className="max-w-md">
    //       <h1 className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24 leading-10 text-6xl font-extrabold text-gray-900 dark:text-gray-100">
    //       Get In Touch
    //       </h1>

        
    //     <p className="md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24 leading-normal"> Whether you have a question, collaborate on a project or just want to say hi, I'll try my best to get back to you.</p>
    //     <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24 ">
    //     <Link href="/">
    //       <button className="px-6 py-4 text-sm font-medium bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-4 px-6 border border-green-400 hover:border-transparent rounded">
    //         Say Hello!
    //       </button>
    //     </Link>
    //     </div>
        
    //   </div>
    // </div>

<div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
<div className="pt-6 pb-8 space-x-2 md:space-y-5">
  <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-base sm:leading-normal sm:border-r-2 sm:px-4 md:text-6xl md:leading-14 md:border-r-2 md:px-6 ">
    Get in Touch
  </h1>
</div>
<div className="max-w-md">
  <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
  If you have a question, want to collaborate on a project or just want to say hi, I'll be happy to communicate with you!
  </p>
  <p className="mb-8">You can also reach me around the web: <Link href={siteMetadata.twitter} className="text-blue-400">Twitter</Link>, <Link href="/" className="text-yellow-500">Instagram</Link>,  <Link href={siteMetadata.linkedin} className="text-blue-600">LinkedIn</Link></p>
  <Link href={`mailto:${siteMetadata.email}`}>
    <button className="inline px-4 py-2 text-sm font-medium leading-5 bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white py-4 px-6 border border-green-400 hover:border-transparent rounded">
      Say Hello 👋
    </button>
  </Link>
</div>
</div>
  )
}
