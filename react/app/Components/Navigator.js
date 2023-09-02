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
const [vis, setVis] = useState('hidden');

  useEffect(() => {
    if (typeof window !== 'undefined')
    {
  setSrv(document.getElementById('srvCont'))
  setVis('')
  }
  });

  return (
    <nav className="flex fixed w-full z-30 md:justify-between justify-evenly  md:gap-20p border-solid border-b bg-navYellow border-gray-600">
        <div className="flex md:ml-[5%] items-center justify-center gap-11">
            <Link className={`${poppins.className} text-green-600 md:text-2xl`} href={'/'}>Top Tier Services LLC</Link>
                    </div>
                    <div className="flex items-center gap-3 md:mr-20 md:gap-9">
                    <p onClick={() => {  srv.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })}} className={`${comf.className} ${vis} cursor-pointer text-green-600 md:text-xl py-3`}>Services</p>
                    <Link className={`${comf.className}  text-green-600 md:text-xl py-3`} href={'/contact'}>Contact</Link>
        <h3 className={`${opens.className} text-green-600 md:text-2xl py-3`}>1 (920) 636-0831</h3>
        <Link target="_blank" href={'https://www.facebook.com/groups/801973678237251'}><GrFacebook size={30} color={'blue'}/></Link>
        </div>
    </nav>
  )
}
