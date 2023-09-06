
import Image from "next/image"
import Link from "next/link"
import {  Comfortaa } from "next/font/google"


const inder = Comfortaa({
  weight: '400',
  subsets: ['latin'],
})


export default function Main() {
  return (
    <div className="flex pt-[50px] w-full">
      <Image
      alt="backMainImg"
        className="w-full min-h-[150px]"
        src={'/head.png'}
        width={1920}
        height={1080} />
   <div id="btnCont" className="flex flex-col gap-2 md:gap-10 ml-[30px] md:ml-[12%] absolute items-center w-[40%] sm:w-fit self-center">
    <h2 className={`w-fit text-xl md:text-2xl lg:text-3xl md:mb-20 text-center`}>The help you were looking for!</h2>
   <button className="btn w-fit">
    <p className={`md:text-xl lg:text-2xl`}>GET FREE QUOTE</p>
    <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
</button>    
</div>

    
</div>
  )
}