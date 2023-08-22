import Image from "next/image"
import { DM_Sans } from "next/font/google"

const dmsans = DM_Sans({
    weight: '700',
    subsets: ['latin'],
  })

export default function Buttons()
{
    return(
    <div className="flex my-10  justify-evenly py-10 gap-3  flex-wrap">
        <div className="flex mb-3 flex-col items-center gap-2">
          <Image
          alt="quoteImg"
            src={'/free.svg'}
            width={80} className="sm:h-auto h-[50px]"
            height={80} />
          <h2 className={`${dmsans.className} text-lg sm:text-2xl`}>FREE QUOTE</h2>
          <span className="text-gray-500  sm:text-sm text-xs">Free qoutes on any selecte services.</span> 
          <span className="text-gray-500  sm:text-sm text-xs">Toll-Free call to get a quote now!</span>
        </div>

        <div className="flex mb-3 flex-col items-center gap-2">
          <Image
          alt="refundImg"
            src={'/refund.svg'}
            width={80} className="sm:h-auto h-[50px]"
            height={80} />
          <h2 className={`${dmsans.className} text-lg sm:text-2xl`}>REFUND</h2>
          <span className="text-gray-500  sm:text-sm text-xs">Money back guaranteed, damage coverage</span>
          <span className="text-gray-500  sm:text-sm text-xs"> from any selected services</span>
        </div>


        <div className="flex mb-3 flex-col items-center gap-2">
          <Image
          alt="flexPayImg"
            className="mb-2 sm:h-auto h-[50px]"
            src={'/pay.svg'}
            width={70}  
            height={70} />
         <h2 className={`${dmsans.className} text-lg sm:text-2xl`}>FLEXIBLE PAYMENTS</h2>
         <span className="text-gray-500  sm:text-sm text-xs">Pay with the world’s most popular and secure </span> 
         <span className="text-gray-500  sm:text-sm text-xs">payment methods.</span>
        </div>


        <div className="flex mb-3 flex-col items-center gap-2">
          <Image
          alt="satImg"
            src={'/happy.svg'}
            width={80} className="sm:h-auto h-[50px]"
            height={80} />
           <h2 className={`${dmsans.className} text-lg sm:text-2xl`}>100% SATISFACTION</h2>
          <span className="text-gray-500  sm:text-sm text-xs">100% customer satisfaction</span>
        </div>
      </div>

)}