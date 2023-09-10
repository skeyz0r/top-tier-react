'use client'
import Link from "next/link"
import { Open_Sans, Poppins, Comfortaa } from 'next/font/google'
import {GrFacebook} from "react-icons/gr"
import { useEffect, useState } from "react"

const opens = Open_Sans({
  weight: '300',
  subsets: ['latin'],
})

const comf = Comfortaa({
  weight: '500',
  subsets: ['latin'],
})


const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
})



export default function Navigator() {

  const [srv, setSrv] = useState();
const [cont, setCont] = useState();
const [vis, setVis] = useState('hidden');
const [logo, setLogo] = useState('');


  useEffect(() => {
    if (typeof window !== 'undefined')
    {
  setSrv(document.getElementById('srvCont'));
  setCont(document.getElementById('contF'));
  setVis('flex')
    }

  });


  

  return (
    <nav className={`flex h-[56.8px] justify-between fixed w-full z-30 items-center border-solid border-b bg-navYellow border-gray-600`}>
            <Link className={`${poppins.className} ${logo} pl-7 text-green-600 md:text-2xl`} href={'/'}>Top Tier Services LLC</Link>
                    <div className={` ${vis}  flex items-center gap-3 md:gap-5 sm:mr-7 `}>
                    <h3 onClick={() => { srv.scrollIntoView({ behavior: "smooth", block: "start" })}} className={`${comf.className} hidden md:block  sm:${vis} cursor-pointer text-green-600 lg:text-xl py-3`}>Services</h3>
                    <h3 onClick={() => { cont.scrollIntoView({ behavior: "smooth", block: "end" })}} className={`${comf.className} hidden md:block  sm:${vis} cursor-pointer text-green-600 lg:text-xl py-3`}>Contact</h3>
        <h3 id='num' className={`${opens.className}  text-green-600 md:text-2xl py-3`}>1 (920) 636-0831</h3>
        <Link className=" md:ml-0 ml-2" target="_blank" href={'https://www.facebook.com/groups/801973678237251'}><GrFacebook size={30} color={'blue'}/></Link>
        <div className="md:hidden block" id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul onClick={()=>{logo === '' ? setLogo('opacity-0') : setLogo('')}} id="menu">
    <h1 className={`${poppins.className} self-center py-10  text-green-600 text-3xl`}>Top Tier Services LLC</h1>
     <li onClick={() => { srv.scrollIntoView({ behavior: "smooth", block: "start" })}} className={`${comf.className}  sm:${vis} cursor-pointer text-green-600 lg:text-xl py-3`}>Services</li>
     <li onClick={() => { cont.scrollIntoView({ behavior: "smooth", block: "end" })}} className={`${comf.className}  sm:${vis} cursor-pointer text-green-600 lg:text-xl py-3`}>Contact</li>
     <li className={`${opens.className}  text-green-600 md:text-2xl py-3`}>1 (920) 636-0831</li>
    </ul>
  </div>
  </div>
    </nav>
  )
}
