
import Image from "next/image"
import Link from "next/link"
import {  Comfortaa } from "next/font/google"


const inder = Comfortaa({
  weight: '400',
  subsets: ['latin'],
})


export default function Main() {
  return (
    <main className="flex pt-[50px] flex-col w-full justify-center">
      <div className="flex flex-col w-full justify-center">
      <Image
      alt="backMainImg"
        className="w-full min-h-[150px]"
        src={'/header.jpg'}
        width={1920}
        height={1080} />
      <div className="flex flex-col md:gap-3 gap-1 w-[70%] self-center absolute">
        <h4 className={`${inder.className} text-white relative top-20 left-[15%] md:self-auto rounded-3xl cursor-pointer hover:bg-navYellow hover:text-green-600 transition-all bg-green-600 w-fit py-1 px-2 md:mt-4 md:py-4 md:px-4`}> CALL US NOW </h4>
      </div>
    </div>
    
</main>
  )
}