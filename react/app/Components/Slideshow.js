'use client'

import { useState } from "react"
import Image from "next/image"
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'


export default function Slideshow() {
 
const [image, setImage] = useState({
      one: 'visible',
      two: 'hidden',
      three: 'hidden',
      four: 'hidden',
      five: 'hidden',
      six: 'hidden'
  })

  const [ref, setRef] = useState(1)

  function left()
  {
      if(ref === 1)
      {
        setRef(6)
        setImage({
          one: 'hidden',
          two: 'hidden',
          three: 'hidden',
          four: 'hidden',
          five: 'hidden',
          six: 'visible'
        })
      }
      if(ref === 2)
      {
        setRef(1)
        setImage({
          one: 'visible',
          two: 'hidden',
          three: 'hidden',
          four: 'hidden',
          five: 'hidden',
          six: 'hidden'
        })
      }
      if(ref === 3)
      {
        setRef(2)
        setImage({
          one: 'hidden',
          two: 'visible',
          three: 'hidden',
          four: 'hidden',
          five: 'hidden',
          six: 'hidden'
        })
      }

      if(ref === 4)
      {
        setRef(3)
        setImage({
          one: 'hidden',
          two: 'hidden',
          three: 'visible',
          four: 'hidden',
          five: 'hidden',
          six: 'hidden'
        })
      }

      if(ref === 5)
      {
        setRef(4)
        setImage({
          one: 'hidden',
          two: 'hidden',
          three: 'hidden',
          four: 'visible',
          five: 'hidden',
          six: 'hidden'
        })
      }
      if(ref === 6)
      {
        setRef(5)
        setImage({
          one: 'hidden',
          two: 'hidden',
          three: 'hidden',
          four: 'hidden',
          five: 'visible',
          six: 'hidden'
        })
      }
  }

  function right()
  {
      if(ref === 1)
      {
        setRef(2)
        setImage({
          one: 'hidden',
          two: 'visible',
          three: 'hidden',
          four: 'hidden',
          five: 'hidden',
          six: 'hidden'
        })
      }
      if(ref === 2)
      {
        setRef(3)
        setImage({
          one: 'hidden',
          two: 'hidden',
          three: 'visible',
          four: 'hidden',
          five: 'hidden',
          six: 'hidden'
        })
      }
      if(ref === 3)
      {
        setRef(4)
        setImage({
          one: 'hidden',
          two: 'hidden',
          three: 'hidden',
          four: 'visible',
          five: 'hidden',
          six: 'hidden'
        })
      }

      if(ref === 4)
      {
        setRef(5)
        setImage({
          one: 'hidden',
          two: 'hidden',
          three: 'hidden',
          four: 'hidden',
          five: 'visible',
          six: 'hidden'
        })
      }

      if(ref === 5)
      {
        setRef(6)
        setImage({
          one: 'hidden',
          two: 'hidden',
          three: 'hidden',
          four: 'hidden',
          five: 'hidden',
          six: 'visible'
        })
      }
      if(ref === 6)
      {
        setRef(1)
        setImage({
          one: 'visible',
          two: 'hidden',
          three: 'hidden',
          four: 'hidden',
          five: 'hidden',
          six: 'hidden'
        })
      }
  }
 

  return (
    <section className="py-5 px-3 self-center flex items-center flex-col md:w-[75%]">
      <div className="flex gap-3 items-center max-w-[500px]">
    <BsFillArrowLeftCircleFill className="cursor-pointer" size={30} onClick={() => {left()}}></BsFillArrowLeftCircleFill>
        <div  className="relative w-[90%] flex overflow-hidden">
          <Image className={`${image.one}`} src={'/slides/1.jpg'} width={500} height={500}/>
          <Image className={`${image.two}`} src={'/slides/2.jpg'} width={500} height={500} />
          <Image className={`${image.three}`} src={'/slides/3.jpg'} width={500} height={500} />
          <Image className={`${image.four}`} src={'/slides/4.jpg'} width={500} height={500} />
          <Image className={`${image.five}`} src={'/slides/5.jpg'} width={500} height={500} />
          <Image className={`${image.six}`} src={'/slides/6.jpg'} width={500} height={500} />
        </div>
        <BsFillArrowRightCircleFill className="cursor-pointer" size={30} onClick={() => {right()}}></BsFillArrowRightCircleFill>

        </div>
        </section>
      )}
