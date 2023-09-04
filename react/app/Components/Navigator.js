'use client'
import Link from "next/link"
import { Open_Sans, Poppins, Comfortaa } from 'next/font/google'
import {GrFacebook} from "react-icons/gr"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

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

const path = usePathname()
const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined')
    {
  setSrv(document.getElementById('srvCont'));
  setCont(document.getElementById('formCont'));
  setVis('')
  }
  });
  

  return (
    <nav className="flex h-[56.8px] fixed w-full z-30 justify-evenly sm:justify-between items-center border-solid border-b bg-navYellow border-gray-600">
            <Link className={`${poppins.className} sm:pl-7 text-green-600 md:text-2xl`} href={'/'}>Top Tier Services LLC</Link>
                    <div id="menu" className="flex items-center gap-3 sm:mr-7 md:gap-9">
                    <h3 onClick={() => { path !== '/' ? router.push('/') : srv.scrollIntoView({ behavior: "smooth", block: "start" })}} className={`${comf.className} ${vis} cursor-pointer text-green-600 md:text-xl py-3`}>Services</h3>
                    <h3 onClick={() => { path !== '/' ? router.push('/') : cont.scrollIntoView({ behavior: "smooth", block: "end" })}} className={`${comf.className} ${vis} cursor-pointer text-green-600 md:text-xl py-3`}>Contact</h3>
        <h3 id='num' className={`${opens.className} text-green-600 md:text-2xl py-3`}>1 (920) 636-0831</h3>
        <Link className="md:ml-0 ml-2 hidden sm:block" target="_blank" href={'https://www.facebook.com/groups/801973678237251'}><GrFacebook size={30} color={'blue'}/></Link>
        </div>

    </nav>
  )
}
