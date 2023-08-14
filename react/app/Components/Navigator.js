import Link from "next/link"
import { Open_Sans } from 'next/font/google'
import { Poppins } from "next/font/google"
import { Raleway } from "next/font/google"

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
        <section className="flex  items-center justify-center gap-11">
            <Link className={`${poppins.className} md:text-2xl`} href={'/'}>Top Tier Services LLC</Link>
                    </section>
        <h1 className={`${opens.className} md:text-2xl py-3`}>1 (920)-636-08-31</h1>
    </nav>
  )
}
