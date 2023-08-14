import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"


/* fonts */
const poppinsB = Poppins({
    weight: '600',
    subsets: ['latin']
})

const poppinsL = Poppins({
    weight: '400',
    subsets: ['latin']
})

export default function()
{
    return(
        <section className={`pt-20 flex flex-col`}>
                <h1 className={`text-3xl ml-[4%] ${poppinsB.className} mt-10 `} >House Services</h1>
                    <h2 className={` md:text-xl ml-[3%] ${poppinsL.className} mt-4 `}>Top Tier House and Handyman Services - Elevating Homes through Excellence</h2>
        </section>
    )
}