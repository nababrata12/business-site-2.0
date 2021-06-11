import { CodeIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Team() {
    return (
        <> 
        <div id="#team">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#312E81" fillOpacity="1" d="M0,288L1440,128L1440,320L0,320Z">
                </path></svg>
                <div className=" bg-indigo-900 pb-2 pt-12">
                    <div className="max-w-7xl px-2 mx-auto sm:px-6 lg:px-8">
                        <div className="grid sm:grid-cols-2 items-center">
                            <div>
                            <h1 className="flex items-center text-blue-400
                 text-xl font-bold">Designed for developers <CodeIcon
                  className="h-6 w-6 ml-3" /> </h1>
                   
                    <h1 className=" my-5 text-gray-300 font-bold
                     text-4xl">The world’s most talented powerful
                      team </h1>

                      <p className=" text-xl text-gray-500">
                          We agonize over the right abstractions
                           so your teams don’t need to stitch
                         together disparate systems or spend months
                          integrating payments functionality.
                      </p>

                      <button
                       className="bg-gradient-to-br from-yellow-400 to-red-600
                       px-4 py-2 mt-4 rounded-full focus:outline-none text-lg 
                       text-gray-300
                      ">Meet with our them</button>
                        </div>
                     
                     <Image  height={700} width={700}
                     src="/Teamwork.png"
                     />
                        </div>

                     </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#312e81" fillOpacity="1" d="M0,288L1440,128L1440,0L0,0Z">
                    </path></svg>
        </div>
             
        </>
    )
}

export default Team
