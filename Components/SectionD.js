import { WifiIcon } from "@heroicons/react/outline";
import Image from "next/image";

function SectionD() {
    return (
        <>
          
              <div className="bg-green-400 h-8 w-8 absolute">
                <div className="mix-blend-multiply bg-blue-700 w-20 
                 relative  my-4
                 h-10"></div>
            </div>
          
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#312e81" fillOpacity="1" d="M0,256L1440,32L1440,320L0,320Z">
            </path></svg>
            <div className="bg-indigo-900 h-full w-full pb-20">
                <div className="max-w-7xl px-2 mx-auto sm:px-6 lg:px-8">
                <div className="px-6">
                       <div className=" px-2">
                           <div className="grid sm:grid-cols-2 items-center">
            <div>
                           <h1 className="flex items-center text-blue-400
                 text-xl font-bold" >Global scale
                  <WifiIcon className="h-6 w-6 ml-4" /> </h1>

                  
                      <div>
                          <h1 className=" my-5 text-gray-300 font-bold
                     text-4xl">The backbone for internet business
                     </h1>

                     <p className=" text-xl text-gray-500">
                          For ambitious companies around the world,
                           Stripe makes moving money as simple, borderless 
                           and programmable as the rest of the internet. Our 
                           teams are based in dozens of offices around the 
                           world, and we process hundreds of
                           billions of dollars each year for startups to
                            large enterprises.
                      </p>
                      </div>
                </div>

                      
                       <Image className=""
                       width={700} height={700}
                        src="/Team.png" />

                  </div>

                  <div className="mt-12">
                     <div className=" grid sm:grid-cols-2">
                    <div className="mt-8">
                        <div className="flex items-center">
                    <div className="w-0.5 h-6 bg-blue-400"></div>
                    <h1 className="flex items-center text-white px-2
                 text-xl font-bold">50+</h1>  
                          </div>

                 <p className=" mt-8 text-xl text-gray-500">
                     Explore Stripe Payments, or create 
                     an account instantly and start accepting payments.</p>               
                </div>

                <div className=" mt-8 sm:ml-4">
                    <div className="flex items-center">
                    <div className="w-0.5 h-6 bg-blue-400"></div>
                    <h1 className="flex items-center text-white px-2
                 text-xl font-bold">90%</h1>                 
                </div>

                <p className=" mt-8 text-xl text-gray-500">
                     You can also contact us to design
                      a custom package for your business.</p> 
                </div>
                       </div>

                           </div>                      
                       </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default SectionD
