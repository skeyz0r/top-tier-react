'use client'
import { Poppins, Comfortaa, Sarala } from "next/font/google"
import Link from "next/link"
import { useEffect } from "react"

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
    weight: '400',
    subsets: ['latin'],
  })




export default function House()
{

    return(
        <section className={`md:h-[98%]  pt-20 px-5 flex flex-col`}>
         <h3 className={`${sarala.className} mt-20 text-2xl`}>Other Top Tier  Services:</h3>
             <div className="flex gap-8 "> <Link className="text-blue-700 hover:underline" href={'/services/landscaping'}>Landscapig Services</Link>
        <Link className="text-blue-700 hover:underline"  href={'/services/plowing'}>Plowing Services</Link></div>
    

        <div className="flex md:justify-between flex-wrap justify-center">
        <div className="flex flex-col gap-5 my-9 ml-[2%]">

                    <h3 className={`${poppinsL.className} text-xl`}>List of Top Tier House Services:</h3>
        <ul className={`${comfortaa.className} w-fit flex gap-1 flex-col  mb-9 list-disc px-10`}>
    <li>Roofing and Siding</li>
    <li>Gutter Repair and Cleaning</li>
    <li>Power Washing</li>
    <li>Wall Holes Patching</li>
   <li>Fixing Doors/Floors</li>
    <li>Repairing and Installing Tiles</li>
    <li>Drywall Installation/repair</li>
                        <li>Plaster Patching</li>
                        <li>Touch ups</li>
                        <li>And any more additional services!</li>
</ul>        
</div>

<div className="md:mt-[5%] md:mr-[5%] w-fit mb-11 md:mb-0">
<h1 className={`${poppinsB.className} shadow-line border-t-4 py-3 px-2 border-solid border-navYellow text-3xl`}>GET FREE QUOTE!</h1>
<p className={`${poppinsB.className} text-center border-y-4 py-3 px-2 border-solid border-navYellow text-xl`}>1 (888)-xx-xx-xx</p>
</div>
</div> 
         <h2 className={` md:text-xl ml-[4%] ${poppinsL.className} mt-4 mb-7 `}>Top Tier House and Handyman Services - Elevating Homes through Excellence</h2>           
        </section>
    )
}
