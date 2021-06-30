/* eslint-disable prettier/prettier */
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import Link from 'next/link'
import {FaArrowCircleUp} from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
export default function Achievements() {
  return (
    <>
      <PageSeo
        title={`Achievements ${siteMetadata.author}`}
        description={`Achievements ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/achievements`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-6 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-1">
            Achievements
          </h1>
        </div>
     

        {/* Talks */}

        <div className="pt-6 pb-6">
          <h3 className="font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl">
            Talks
          </h3>
        </div>
        <div className=" items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            {/* Webinar on AI for everyone at Cummins, Pune */}
            <div className="pt-8 pb-4 prose dark:prose-dark max-w-none xl:col-span-2">
            <div className="font-bold text-gray-500 dark:text-gray-400">Webinar on 'AI for Everyone'</div>
            <p>
                Delivered a webinar on basics of ML and AI, a roadmap for beginners and brief info about available career opportunities and how to prepare for them at (AICVS - AI Computer Vision Society) MKSS Cummins College, Pune.
            </p>
            <a href="https://youtu.be/Oe_DP4xateI"><p>Click here for Webinar</p></a>
            </div>
            <div className="flex flex-col items-center pt-8 space-x-2">
            {/* <img src={siteMetadata.image} alt="avatar" className="h-48 rounded-full" /> */}
            <a href="http://aicvs.in/2021/03/26/AI-for-Everyone.html">
                <img src='./static/images/cumminstalk.png' alt="Talk @Cummins" className="rounded-lg" />
            </a>
            
            {/* <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              
            </h3> */}
           
            </div>
            
           
            {/* Workshop on Git and Github at PCCOER, Pune */}
            <div className="flex flex-col items-center pt-8 space-x-2">
                {/* <img src={siteMetadata.image} alt="avatar" className="h-48 rounded-full" /> */}
                <img src='./static/images/github.jpg' alt="Github Workshop" className="h-48 rounded-lg" />
                {/* <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                
                </h3> */}
                
            </div>
            <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <div className="font-bold text-gray-500 dark:text-gray-400">Workshop on 'Git and GitHub: A Walkthrough'</div>
                <p>
                    Delivered a full-day workshop on concepts of Git & GitHub and practical implementation of all the concepts of Git & GitHub in September 2019 at PCCOER, Pune.
                </p>
            </div>
          
          <div className="pt-8 pb-8 prose items-center justify-center dark:prose-dark max-w-none xl:col-span-2">
            <div className="font-extrabold text-gray-500 dark:text-gray-400">Talks at PCCOER, Pune</div>
            <div className="font-bold text-gray-500 dark:text-gray-400">1. Talk on 'Joining ACM and being a part of technical community'</div>
            <div className="font-bold text-gray-500 dark:text-gray-400">2. Talk on 'Introduction to Machine Learning and AI'</div>

            <p>
                Delivered 2 talks at PCCOER, Pune. First talk on joining ACM and the student community and encouraging students to be a part of it and Second talk on giving an overview of Machine Learning and how students can get started in it.
            </p>
          </div>
          <div className="flex flex-col items-center pt-8 space-x-2">
            {/* <img src={siteMetadata.image} alt="avatar" className="h-48 rounded-full" /> */}
            <img src='./static/images/acmevent.jpg' alt="ACMEvent"  className="rounded-lg "/>
            {/* <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            
            </h3> */}
            
          </div>
          
        </div>
      </div>
      <div className="divide-y pt-6">
      <hr/>
            
      </div>
      <div className="divide-y">
        <div className="pt-6 pb-1">
          <h3 className="font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl">
            Publications 
          </h3>
        </div>
        
         
        
        <div className="pt-4 pb-4 flex flex-col items-start justify-start md:flex-row md:mt-6">
        {/* <SiGooglescholar/>  */}
        
        <ul className="list-disc list-inside md:list">
              <li>Visual Assistant for Visually Impaired using Transferred Learning Approach, Journal of SeyBold Report(Scopus-Indexed) -  2020</li>
              <li>Evolution of Techniques for Question Answering over Knowledge Base: A Survey, IJCA - 2019</li>
              <li>Aspect Based Sentiment Analysis on Financial Data using Transferred Learning Approach using pre-trainedBERT and Regressor Mode, IRJET - 2019</li>
              <li>Machine Intelligence for Sustainable Agricultural Developmen, CSI Communications - 2018</li>
        </ul>
        </div>
        <div className="pt-6 ">
        <a
              href={'https://scholar.google.com/citations?user=n0PWgvUAAAAJ&hl=en'}
              target="_blank"
              rel="noreferrer"
              >
       
          <button className="py-2 px-4 bg-transparent hover:bg-green-400 text-green-400 font-semibold hover:text-white  border border-green-400 hover:border-transparent rounded">
            <span>Google Scholar Profile </span> <span role="img" aria-label="scholar logo">
            🎓
            </span>
          </button>

          {/* <SocialIcon  kind="googleScholar" href={siteMetadata.googleScholar} /> */}
        </a>
        </div>
        
      </div>
      
    </>
  )
}
