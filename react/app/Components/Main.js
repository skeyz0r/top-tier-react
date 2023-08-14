
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
    
</main>
  )
}