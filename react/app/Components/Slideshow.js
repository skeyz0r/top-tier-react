'use client'

import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { Sarala } from "next/font/google"
import Image from "next/image";

const sarala = Sarala({
  weight: '400',
  subsets: ['latin'],
})




export default function Slideshow() {

    
      const [img, setImg] = useState(1);
    
   function left()
   {
    if(img === 1)
    {
      setImg(6)
    }
    else
    {
      setImg(img - 1)
    }
   }

   function right()
   {
    if(img === 6)
    {
      setImg(1)
    }
    else
    {
      setImg(img + 1)
    }
   }
    
      return (
        <section className="mb-[100px]">
        <div className='max-w-[1000px] h-[730px] w-full m-auto py-16 px-4 relative group'>
        <h1 className={`${sarala.className} text-6xl  mb-4`}>Gallery</h1>
          <div className="flex items-center">
            <BsChevronCompactLeft className="cursor-pointer" onClick={left} size={30}/>
            <Image className="w-full object-contain h-[500px]"
            src={`/slides/${img}.jpg`}
              width={500}
              height={500}
            />
            <BsChevronCompactRight className="cursor-pointer border border-solid border-black" onClick={right} size={30}/>
          </div>
        </div>
        </section>

      );
    }
              
  