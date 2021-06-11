import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import Image from 'next/image'


function Section() {
    return (
        <>
           <div>
               <div className="h-screen bg-gradient-to-r from-yellow-400 to-red-600">
              <div className="flex justify-between max-w-7xl px-2 mx-auto sm:px-6 lg:px-8">
                  <div className="relative flex flex-col pt-48 sm:pt-60">
                      <h1 className="inline-block text-5xl font-bold text-indigo-600 ">
                          Grow more with <span className="uppercase">WorkFlow</span>
                           <br />
                      </h1>
                       <span className="text-white text-lg mt-2">
                      Millions of businesses of all sizes—from startups to large
                       enterprises—use our software to manage their businesses online.
                      </span>
                        <div className="mt-8">
                             <a className="absolute flex py-2 px-4 rounded-full text-lg
                              text-gray-300  items-center
                              bg-gradient-to-br from-red-600 to-purple-600 uppercase"
                              href="https://www.fiverr.com/nababrata12?up_rollout=true"
                              target="_blank">Get Fiverr Gig<ArrowCircleRightIcon 
                               className="h-6 w-6 relative ml-4 rounded-full" /> </a>
                       </div>
                  </div>
                  <div className="hidden md:inline-flex content-end pt-8 sm:pt-40
                   lg:pt-2">
                      <Image
                           src="/Coding.png"
                           alt="Picture of the author"
                           width={700}
                           height={700}
                           />
                  </div>
              </div>
              
           </div> 
           </div>
           <div className="-mt-20 sm:-mt-28 md:-mt-40 lg:-mt-52">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#ffffff" fillOpacity="1" d="M0,32L60,69.3C120,107,240,181,360,181.3C480,181,600,107,720,80C840,53,960,75,1080,101.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                   </path></svg>
           </div>
           
        </>
    )
}

export default Section
