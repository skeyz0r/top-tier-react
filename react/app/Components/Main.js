'use client'
import Image from "next/image"
import Link from "next/link"
import {  Caveat } from "next/font/google"
import { useEffect, useState } from "react"


const caveat = Caveat({
  weight: '400',
  subsets: ['latin'],
})


export default function Main() {

  const [cont, setCont] = useState();
  const [vis, setVis] = useState('hidden');
  
  
  useEffect(() => {
    if (typeof window !== 'undefined')
    {
  setCont(document.getElementById('contF'));
  setVis('flex')
  }
  });

  return (
    <div className="flex pt-[50px] w-full">
      <Image
      alt="backMainImg"
        className="w-full min-h-[150px]"
        src={'/head.png'}
        width={1920}
        height={1080} />
   <div id="btnCont" className="flex flex-col gap-2 md:gap-10 ml-[30px] md:ml-[12%] absolute items-center w-[40%] sm:w-fit self-center">
    <h2 className={`${caveat.className} ${vis} text-green-500 drop-shadow-md w-fit text-2xl md:text-4xl lg:text-5xl md:mb-10 text-center`}>The help you were looking for.</h2>
   <button onClick={() => { cont.scrollIntoView({ behavior: "smooth", block: "end" })}} className={`${vis} btn w-fit`}>
    <p className={`md:text-xl absolute md:relative lg:text-2xl `}>GET FREE QUOTE</p>
    <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
</button>    
</div>

    
</div>
  )
}