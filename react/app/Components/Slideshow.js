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
       
        </section>

      );
    }
              
  