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
    <section className="select-none my-6 py-5 px-3 self-center flex items-center flex-col border">
      <div className="flex gap-3 items-center max-w-[500px]">
    <BsFillArrowLeftCircleFill className=" select-none cursor-pointer" size={30} onClick={() => {left()}}></BsFillArrowLeftCircleFill>
        <div  className="relative w-[90%] flex overflow-hidden">
          <Image className={`h-[400px] object-contain ${image.one}`} src={'/slides/1.jpg'} width={500} height={500}/>
          <Image className={`h-[400px] object-contain ${image.two}`} src={'/slides/2.jpg'} width={500} height={500} />
          <Image className={`h-[400px] object-contain ${image.three}`} src={'/slides/3.jpg'} width={500} height={500} />
          <Image className={`h-[400px] object-contain ${image.four}`} src={'/slides/4.jpg'} width={500} height={500} />
          <Image className={`h-[400px] object-contain ${image.five}`} src={'/slides/5.jpg'} width={500} height={500} />
          <Image className={`h-[400px] object-contain ${image.six}`} src={'/slides/6.jpg'} width={500} height={500} />
        </div>
        <BsFillArrowRightCircleFill className="select-none cursor-pointer" size={30} onClick={() => {right()}}></BsFillArrowRightCircleFill>

        </div>
        </section>
      )}
