import Image from "next/image"
import Link from "next/link"
import { Poppins, Comfortaa, Sarala } from "next/font/google"



/* fonts */
const poppinsB = Poppins({
    weight: '600',
    subsets: ['latin']
})

const poppinsL = Poppins({
    weight: '400',
    subsets: ['latin']
})

const comfortaa = Comfortaa({
    weight: '400',
    subsets: ['latin'],
})

const sarala = Sarala({
    weight: '700',
    subsets: ['latin'],
  })



export default function House()
{
    return(
        <section className={`pt-20 px-5 flex flex-col`}>
                <h1 className={`text-3xl ml-[6%] ${poppinsB.className} mt-10 `} >House Services</h1>
                    <h2 className={` md:text-xl ml-[4%] ${poppinsL.className} mt-4 mb-7 `}>Top Tier House and Handyman Services - Elevating Homes through Excellence</h2>

        <div className="flex flex-col gap-5 my-9 ml-[2%]">

                    <h3 className={`${poppinsL.className} text-xl`}>List of Top Tier House Services:</h3>
        <ul className={`${comfortaa.className} flex gap-1 flex-col pl-[3%] mb-9 list-disc px-10`}>
    <li>Roofing and Siding</li>
    <li>Gutter Repair and Cleaning</li>
    <li>Power Washing</li>
    <li>Wall Holes Patching</li>
   <li>Fixing Doors/Floors</li>
    <li>Repairing and Installing Tiles</li>
    <li>Drywall Installation/repair</li>
                        <li>Plaster Patching</li>
                        <li>Touch ups</li>
                        <li>And any more additional service!</li>
</ul>        </div>            
        </section>
    )
}