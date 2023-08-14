'use client'

import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { Sarala } from "next/font/google"
import Image from "next/image";

/* fonts */
const sarala = Sarala({
  weight: '400',
  subsets: ['latin'],
})




export default function Slideshow() {
      return (
        <section className="mb-[100px]">
        <div className='max-w-[1000px] h-[730px] w-full m-auto py-16 px-4 relative group'>
        <h1 className={`${sarala.className} text-6xl  mb-14`}>Gallery</h1>
          <div className="flex items-center transition-all">
            <BsChevronCompactLeft color="white" className="absolute rounded-lg select-none bg-black left-4 md:left-0 md:relative cursor-pointer" onClick={()=>{img == 1 ? setImg(6) : setImg(img - 1) }} size={30}/>
            <Image className="w-full object-contain h-[500px]"
            src={`/slides/${img}.jpg`}
              width={500}
              height={500}
            />
            <BsChevronCompactRight color="white" className="absolute right-4 select-none md:right-0 md:relative cursor-pointer border border-solid rounded-lg bg-black border-black" onClick={()=>{img == 6 ? setImg(1) : setImg(img + 1) }}  size={30}/>
          </div>
        </div>
        </section>

      );
    }
              
  