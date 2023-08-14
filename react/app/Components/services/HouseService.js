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

        <div className="my-9 ml-[2%]">
            <h2 className={`${sarala.className} `}>Carpentry:</h2>
                    <ul className={`${comfortaa.className} mb-9 list-disc px-10`}>
                        <li>Furniture assembly</li>
                        <li>Shelving Installation</li>
                        <li>Trim and molding installation</li>
                        <li>Door a window repairs</li>
                    </ul>

                    <h2 className={`${sarala.className} `}>Plumbing:</h2>
                    <ul className={`${comfortaa.className} mb-9 list-disc px-10`}>
                        <li>Faucet and fixture repairs/replacement</li>
                        <li>Toilet repairs</li>
                        <li>Leaky pipe fixing</li>
                        <li>Drain cleaning</li>
                    </ul>

                    <h2 className={`${sarala.className} `}>Painting:</h2>
                    <ul className={`${comfortaa.className} mb-9 list-disc px-10`}>
                        <li>Interior and exterior painting</li>
                        <li>Touch-up work</li>
                        <li>Drywall repairs</li>
                        <li>Staining and varnishing</li>
                    </ul>

                    <h2 className={`${sarala.className} `}>Home Maintenance:</h2>
                    <ul className={`${comfortaa.className} mb-9 list-disc px-10`}>
                        <li>Gutter Cleaning</li>
                        <li>Power washing</li>
                        <li>Weatherproofing</li>
                        <li>Pest control</li>
                    </ul>   

                     <h2 className={`${sarala.className} `}>Home Maintenance:</h2>
                    <ul className={`${comfortaa.className} mb-9 list-disc px-10`}>
                        <li>Gutter Cleaning</li>
                        <li>Power washing</li>
                        <li>Weatherproofing</li>
                        <li>Pest control</li>
                    </ul>                   
        </div>            
        </section>
    )
}