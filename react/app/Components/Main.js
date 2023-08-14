
import Image from "next/image"
import Link from "next/link"
import { DM_Sans } from "next/font/google"

const dmsans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
})

export default function Main() {
  return (
    <main className="flex flex-col w-full justify-center object-contain py-12">
      <div className="flex flex-col w-full justify-center object-contain">
      <Image
      alt="backMainImg"
        className="w-full"
        src={'/imag.jpg'}
        width={1920}
        height={1080} />
      <div className="flex flex-col md:w-1/3 self-center absolute">
        <h1 className="text-white md:text-2xl xl:text-4xl">CALL US NOW</h1>
        <h2 className="text-white md:text-2xl xl:text-4xl">TO GET A FREE QUOTE</h2>
        <h4 className="text-white self-center md:self-auto rounded-3xl cursor-pointer hover:bg-navYellow hover:text-green-600 transition-all bg-green-600 w-fit py-1 px-2 md:mt-4 md:py-4 md:px-4"> CALL US NOW </h4>
      </div>
    </div>
    
    <div className="flex gap-16 justify-center mt-14 flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <Image
          alt="quoteImg"
            src={'/free.svg'}
            width={80}
            height={80} />
          <h2 className={`${dmsans.className} text-2xl`}>FREE QUOTE</h2>
          <span className="text-gray-400">Free qoutes on any selecte services.</span> <span className="text-gray-400">Toll-Free call to get a quote now!</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image
          alt="refundImg"
            src={'/refund.svg'}
            width={80}
            height={80} />
          <h2 className={`${dmsans.className} text-2xl`}>REFUND</h2>
          <span className="text-gray-400">Money back guaranteed, damage coverage</span> <span className="text-gray-400"> from any selected services</span>
        </div>


        <div className="flex flex-col items-center gap-2">
          <Image
          alt="flexPayImg"
            className="mb-2"
            src={'/pay.svg'}
            width={70}
            height={70} />
          <h2 className={`${dmsans.className} text-2xl`}>FLEXIBLE PAYMENTS</h2>
          <span className="text-gray-400">Pay with the world’s most popular and secure </span> <span className="text-gray-400">payment methods.</span>
        </div>


        <div className="flex flex-col items-center gap-2">
          <Image
          alt="satImg"
            src={'/happy.svg'}
            width={80}
            height={80} />
          <h2 className={`${dmsans.className} text-2xl`}>100% SATISFACTION</h2>
          <p className=" text-gray-400">100% customer satisfaction</p>
        </div>
      </div>
</main>
  )
}