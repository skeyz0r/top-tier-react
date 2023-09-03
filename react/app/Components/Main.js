
import Image from "next/image"
import Link from "next/link"
import {  Comfortaa } from "next/font/google"


const inder = Comfortaa({
  weight: '400',
  subsets: ['latin'],
})


export default function Main() {
  return (
    <div className="flex pt-[50px]  w-full">
      <Image
      alt="backMainImg"
        className="w-full min-h-[150px]"
        src={'/header.jpg'}
        width={1920}
        height={1080} />
   <div id="btnCont" className="flex justify-end absolute w-[40%] self-end mb-6">
      <button className="btn">
    Call us Now
</button>      
</div>

    
</div>
  )
}