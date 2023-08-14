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
        <section className={`pt-20 flex flex-col`}>
                <h1 className={`text-3xl ml-[4%] ${poppinsB.className} mt-10 `} >House Services</h1>
                    <h2 className={` md:text-xl ml-[3%] ${poppinsL.className} mt-4 `}>Top Tier House and Handyman Services - Elevating Homes through Excellence</h2>

        <div className="flex flex-wrap gap-5 my-9 ml-[2%]">

        <div className="flex flex-col gap-7">
                    <ul className={`${comfortaa.className} flex gap-1 flex-col mb-9 list-disc px-10`}>
                    <h2 className={`${sarala.className} mb-3`}>Carpentry:</h2>
                        <li>Furniture assembly</li>
                        <li>Shelving Installation</li>
                        <li>Trim and molding installation</li>
                        <li>Door a window repairs</li>
                    </ul>

                    <ul className={`${comfortaa.className} flex gap-1 flex-col mb-9 list-disc px-10`}>
                    <h2 className={`${sarala.className} mb-3`}>Plumbing:</h2>
                        <li>Faucet and fixture repairs/replacement</li>
                        <li>Toilet repairs</li>
                        <li>Leaky pipe fixing</li>
                        <li>Drain cleaning</li>
                    </ul>
           


            <ul className={`${comfortaa.className} flex gap-1 flex-col mb-9 list-disc px-10`}>
                    <h2 className={`${sarala.className} mb-3`}>Roofing & Siding</h2>
                        <li>Roof leak repairs</li>
                        <li>Siding maintenance</li>
                        <li>Gutter repair</li>
                    </ul>     
                  


                    <ul className={`${comfortaa.className} flex gap-1 flex-col mb-9 list-disc px-10`}>
                    <h2 className={`${sarala.className} mb-3`}>Home Maintenance:</h2>
                        <li>Gutter Cleaning</li>
                        <li>Power Washing</li>
                        <li>Weatherproofing</li>
                        <li>Pest control</li>
                    </ul>   


<ul className={`${comfortaa.className} flex gap-1 flex-col mb-9 list-disc px-10`}>
                    <h2 className={`${sarala.className} mb-3`}>General Repair:</h2>
                        <li>Patching holes in walls</li>
                        <li>Fixing squeaky doors/floors</li>
                        <li>Repairing damaged tiles</li>
                        <li>Lock and handle replacements</li>
                    </ul>      
</div>

                    <div className="flex flex-col gap-5">

                    <ul className={`${comfortaa.className} flex gap-1 flex-col mb-9 list-disc px-10`}>
                    <h2 className={`${sarala.className} mb-3`}>Deck & Patio:</h2>
                        <li>Deck repairs</li>
                        <li>Patio installation</li>
                        <li>Staining/sealing</li>
                        <li>Railing installation</li>
                    </ul>        



<ul className={`${comfortaa.className} flex gap-1 flex-col mb-9 list-disc px-10`}>
                    <h2 className={`${sarala.className} mb-3`}>Tile & Flooring</h2>
                        <li>Tile installation</li>
                        <li>Grout cleaning/replacement</li>
                        <li>Hardwood/laminate floor repairs</li>
                    </ul>      

                    <ul className={`${comfortaa.className} flex gap-1 flex-col mb-9 list-disc px-10`}>
                    <h2 className={`${sarala.className} mb-3`}>Window & Screen:</h2>
                        <li>Window repairs</li>
                        <li>Screen replacement</li>
                        <li>Weatherstripping</li>
                    </ul>        
                

<ul className={`${comfortaa.className} flex gap-1 flex-col mb-9 list-disc px-10`}>
                    <h2 className={`${sarala.className} mb-3`}>Drywall & Plasters</h2>
                        <li>Drywall installation/repair</li>
                        <li>Plaster patching</li>
                        <li>Texturing walls</li>
                    </ul>      

                    <ul className={`${comfortaa.className} flex gap-1 flex-col mb-9 list-disc px-10`}>
                    <h2 className={`${sarala.className} mb-3`}>Painting:</h2>
                        <li>Interior and exterior painting</li>
                        <li>Touch-up work</li>
                        <li>Drywall repairs</li>
                        <li>Staining and varnishing</li>
                    </ul>      
                    </div>


        </div>            
        </section>
    )
}