
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
      <div className="relative">
      <Image
      alt="backMainImg"
        className="w-full min-h-[150px]"
        src={'/header.jpg'}
        width={1920}
        height={1080} />
      <div className="flex flex-col md:gap-3 gap-1 w-[70%] top-[-150px]  relative">
      <button className="btn">
    Call us Now
</button>      
</div>
    </div>
    
</main>
  )
}