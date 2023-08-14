import Link from "next/link"
import { Open_Sans } from 'next/font/google'
import { Poppins } from "next/font/google"
import {GrFacebook} from "react-icons/gr"

const opens = Open_Sans({
  weight: '300',
  subsets: ['latin'],
})


const poppins = Poppins({
  weight: '800',
  subsets: ['latin'],
})



export default function Navigator() {
  return (
    <nav className="flex fixed w-full z-30 justify-evenly md:justify-center  md:gap-20p border-solid border-b bg-navYellow border-gray-600">
        <div className="flex  items-center justify-center gap-11">
            <Link className={`${poppins.className} md:text-2xl`} href={'/'}>Top Tier Services LLC</Link>
                    </div>
                    <div className="flex items-center gap-3 md:gap-9">
        <h3 className={`${opens.className} md:text-2xl py-3`}>1 (920)-636-08-31</h3>
        <Link target="_blank" href={'https://www.facebook.com/groups/801973678237251'}><GrFacebook size={30} color={'blue'}/></Link>
        </div>
    </nav>
  )
}
