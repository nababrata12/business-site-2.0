import Footer from "./Footer";

function SectionE() {
    return (
        <>            
           <div className="bg-white pt-8">
                <div className="max-w-7xl px-2 mx-auto sm:px-6 lg:px-8">
               <div className="px-6 my-16">
                    <div className="flex items-center">
                    <div className="w-0.5 h-6 bg-blue-400"></div>
                    <h1 className="flex items-center text-blue-600 px-2
                 text-2xl font-bold">Get ready to start?</h1>
                </div>

                <h1 className=" my-10 px-2 text-xl font-semibold
                 text-gray-700">
                    A technology-first approach to grow your business online
                    </h1>
                    <a href="https://www.fiverr.com/nababrata12?up_rollout=true"
                     target="blank"
                      className="bg-gradient-to-br from-yellow-400
                     to-red-600 px-4 py-2 rounded-full text-gray-300 
                     font-semibold"
                    >Start now</a>
                         
               </div> 
               
               <div className="px-6 my-16">
                   <div className="grid sm:grid-cols-2 md:grid-cols-4">
                         <div>
                             <div className="flex items-center">
                             <div className="h-4 w-4 bg-yellow-500 rounded-full
                     animate-bounce"></div>
                             <h1 className="px-2 text-2xl
                           font-semibold"
                             >Start your integration</h1> </div>
                        <p className="px-6 my-3 text-gray-800">
                           Get up and running with Stripe in as
                            little as 10 minutes.
                        </p>
                        </div>                        
                         <div>
                             <div className="flex items-center">
                             <div className="h-4 w-4 bg-blue-500 rounded-full
                     animate-bounce"></div>
                             <h1 className="px-2 text-2xl
                           font-semibold"
                             >Always know what to do</h1> </div>
                        <p className="px-6 my-3 text-gray-800">
                            Integrated per-transaction pricing with no
                             hidden fees.
                        </p>
                         </div>

                         </div>
               </div>
               


            </div>   
            <Footer /> 
           </div>
        </>
    )
}

export default SectionE
