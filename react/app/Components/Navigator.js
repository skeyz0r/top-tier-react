'use client'
import Link from "next/link"
import Image from "next/image"
import { Open_Sans, Poppins, Comfortaa } from 'next/font/google'
import {GrFacebook} from "react-icons/gr"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from 'next/navigation'

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
const [check, setCheck] = useState(false);
const path = usePathname();
const router = useRouter();


  useEffect(() => {
    if (typeof window !== 'undefined')
    {
      if(path !== '/' || path !== '/policy')
      {
        document.getElementsByTagName('html')[0].classList.add('h-full')
      document.body.classList.add('h-full');
      }
      else
      {
        document.getElementsByTagName('html')[0].classList.remove('h-full')
        document.body.classList.remove('h-full');
      }
      setSrv(document.getElementById('srvCont'));
  setCont(document.getElementById('contF'));
  setVis('flex')
    }

  check === true ? setLogo('opacity-0'): setLogo('');
  window.addEventListener('resize', function() {
    if(window.innerWidth > 740)
    {
     setCheck(false);
    }
     
     });
  })


const navi = (prop) => {

  path !== '/' ? router.push('/') : prop.scrollIntoView({ behavior: "smooth", block: "start" });
  setCheck(!check);
}
  

  return (
    <nav className={`flex h-[76.8px] justify-between fixed w-full z-30 items-center border-solid border-b bg-navYellow border-gray-600`}>
            <Link className={`${poppins.className} ${logo} logo pl-7 text-green-600 md:text-2xl`} href={'/'}><Image alt="logo" src={'/logo.svg'} height={80} width={80}/></Link>
                    <div className={` ${vis}  flex items-center gap-3 md:gap-5 sm:mr-7 `}>
                    <h3 onClick={() => {   path.includes('/services') ? router.push('/') : srv.scrollIntoView({ behavior: "smooth", block: "start" });}} className={`${comf.className} hidden md:block  sm:${vis} cursor-pointer text-green-600 lg:text-xl py-3`}>Services</h3>
                    <h3 onClick={() => {   path.includes('/services') ? router.push('/') : cont.scrollIntoView({ behavior: "smooth", block: "start" });}} className={`${comf.className} hidden md:block  sm:${vis} cursor-pointer text-green-600 lg:text-xl py-3`}>Contact</h3>
        <h3 id='num' className={`${opens.className}  hidden md:block text-green-600 md:text-2xl py-3`}>1 (920) 636-0831</h3>
        <Link className=" hidden md:block md:ml-0 ml-2" target="_blank" href={'https://www.facebook.com/groups/801973678237251'}><GrFacebook size={30} color={'blue'}/></Link>
        <div className="md:hidden block mt-[13px]" id="menuToggle">
    <input checked={check} onChange={() => {setCheck(!check)}} type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
    <h2 className={`${poppins.className} self-center py-10  text-green-600 text-3xl`}>Top Tier Services</h2>
     <li onClick={() => {navi(srv)}} className={`${comf.className} hover:shadow-sm sm:${vis} cursor-pointer text-black lg:text-xl py-3`}>Services</li>
     <li onClick={() => {navi(cont)}}className={`${comf.className} hover:shadow-sm  sm:${vis} cursor-pointer text-black lg:text-xl py-3`}>Contact</li>
     <li className={`${opens.className} flex  text-green-600 md:text-2xl py-3`}><h3>+1 (920) 636-0831 </h3>      
       <Link className="  ml-2" target="_blank" href={'https://www.facebook.com/groups/801973678237251'}>
       <GrFacebook size={30} color={'blue'}/>
       </Link>
</li>
    </ul>
  </div>
  </div>
    </nav>
  )
}
