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
const [logo, setLogo] = useState('visible');
const [cont, setCont] = useState();
const [vis, setVis] = useState('hidden');
const [on, setOn] = useState(false);
const [but, setBut] = useState('flex');
const [just, setJust] = useState('justify-between');
const [line, setLine] = useState({o: '', t: '', th: ''})

  useEffect(() => {
    if (typeof window !== 'undefined')
    {
  setSrv(document.getElementById('srvCont'));
  setCont(document.getElementById('contF'));
  setVis('flex')
    }
    if(window.innerWidth > 740)
    {
      setBut('hidden')
    }
    else
    {
      setBut('flex')
    }
        if(but === 'hidden')
        {
          setLogo('visible');
        }
    window.addEventListener('resize', () => {
      if(window.innerWidth > 740)
      {
        setBut('hidden')
        setOn(true, menuX())
      }

      else
      {
        setBut('flex')
      }
          if(but === 'hidden')
          {
            setLogo('visible');
          }});

  });


  
function menuX()
{
  const small = document.getElementsByClassName('ss');

    if(on)
    {
     
      small[0].classList.add('small');    
      small[1].classList.add('small');    
      small[2].classList.add('small');    
      small[3].classList.add('small'); 
      setJust('justify-between');
      setOn(false);
      setLogo('visible');
      setLine({o: '', t: '', th: ''})
    }
    else
    {
      small[0].classList.remove('small');
      small[1].classList.remove('small');
      small[2].classList.remove('small');
      setJust('justify-end');
      small[3].classList.remove('small');
            setLogo('hidden')
            setLine({o: 'hidden', t: 'hidden', th: ''})
            setOn(true)
    }
  
}

  return (
    <nav className={`flex h-[56.8px] fixed w-full z-30 ${just} items-center border-solid border-b bg-navYellow border-gray-600`}>
            <Link id="logo" className={`${poppins.className} ${logo} pl-7 text-green-600 md:text-2xl`} href={'/'}>Top Tier Services LLC</Link>
                    <div id="menu" className={` ${vis}  flex items-center gap-3 md:gap-5 sm:mr-7 `}>
                    <h3 onClick={() => { path !== '/' ? router.push('/') : srv.scrollIntoView({ behavior: "smooth", block: "start" })}} className={`${comf.className} big sm:${vis} cursor-pointer text-green-600 lg:text-xl py-3`}>Services</h3>
                    <h3 onClick={() => { path !== '/' ? router.push('/') : cont.scrollIntoView({ behavior: "smooth", block: "end" })}} className={`${comf.className} big sm:${vis} cursor-pointer text-green-600 lg:text-xl py-3`}>Contact</h3>
                    <h3 onClick={() => { path !== '/' ? router.push('/') : srv.scrollIntoView({ behavior: "smooth", block: "start" })}} className={`${comf.className} ss small sm:${vis} cursor-pointer text-green-600 lg:text-xl py-3`}>Services</h3>
                    <h3 onClick={() => { path !== '/' ? router.push('/') : cont.scrollIntoView({ behavior: "smooth", block: "end" })}} className={`${comf.className} ss small sm:${vis} cursor-pointer text-green-600 lg:text-xl py-3`}>Contact</h3>
        <h3 id='num' className={`${opens.className} big text-green-600 md:text-2xl py-3`}>1 (920) 636-0831</h3>
        <Link className="big md:ml-0 ml-2" target="_blank" href={'https://www.facebook.com/groups/801973678237251'}><GrFacebook size={30} color={'blue'}/></Link>
        <h3 id='num' className={`${opens.className} ss small text-green-600 md:text-2xl py-3`}>1 (920) 636-0831</h3>
        <Link className="small ss md:ml-0 ml-2" target="_blank" href={'https://www.facebook.com/groups/801973678237251'}><GrFacebook size={30} color={'blue'}/></Link>
        <div className={`hamburger-lines ${but}`} onClick={() =>{menuX()}}>
              <span className={`line ${line.o}`}></span>
              <span className={`line ${line.t}`}></span>
              <span className={`line ${line.th}`}></span>
          </div>  
        </div>
    </nav>
  )
}
