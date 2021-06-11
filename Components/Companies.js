import { ArrowCircleRightIcon } from "@heroicons/react/outline"
import Image from "next/image"

function Companies() {
    return (
        <>
            <div className="bg-white pb-4">
                <div className="max-w-7xl px-2 mx-auto sm:px-6 lg:px-8">
                <h1 className="flex flex-col items-center text-gray-400
                 text-2xl font-bold uppercase">companies
                 <div className="h-0.5 w-40 flex justify-center bg-gray-500"></div></h1>
                 
                 <div className="px-10 my-10 flex justify-between">
                     <Image
                     height={50} width={100}
                  src="https://www.nextbigbrand.in/wp-content/uploads/2019/01/oyo-e1548346484702.png"
                  alt="" />
                  <Image height={50} width={100}
                   src="https://ecellimi.files.wordpress.com/2017/11/unacademy-logo.png?w=648"
                   alt="" />
                  <Image height={50} width={100}
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WXfUEZrPvyq_v6DL87Qh8KOsvO6xNg7k_6aWc_g8j2j2pLamdWe3TzMfLCawY3-jDzM&usqp=CAU"
                   alt="" />
                 </div>
             </div>
            </div>
        </>
    )
}

export default Companies
