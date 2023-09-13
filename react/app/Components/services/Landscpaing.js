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
    weight: '400',
    subsets: ['latin'],
  })



export default function Landscaping()
{
    return(
        <section className={`mb-[2.23%] pt-20 px-5 flex flex-col`}>
           <div className="flex gap-8"> <Link className="text-blue-700 hover:underline" href={'/services/house-service'}>Handyman Services</Link>
        <Link className="text-blue-700 hover:underline"  href={'/services/landscaping'}>Plowing Services</Link></div>
             <h3 className={`${sarala.className} mt-20 text-2xl`}>Top Tier Landscaping Services</h3>
        <div className="flex md:justify-between flex-wrap justify-center">
        <div className="flex flex-col gap-5 my-9 ml-[2%]">

                    <h3 className={`${poppinsL.className} text-xl`}>List of Top Tier Landscaping Services:</h3>
        <ul className={`${comfortaa.className} w-fit flex gap-1 flex-col  mb-9 list-disc px-10`}>
   <li>Lawn Care</li>
    <li>Lawn Rolling</li>
    <li>Pruning and Trimming</li>
    <li>Tree Cutting</li>
    <li>Sod and Mulch Installment</li>
   <li>Lawn Seeding</li>
    <li>Rock Installation</li>
   
                        <li>And any more additional services!</li>
</ul>        
</div>

<div className="md:mt-[5%] md:mr-[5%] w-fit mb-11 md:mb-0">
<h1 className={`${poppinsB.className} shadow-line border-t-4 py-3 px-2 border-solid border-navYellow text-3xl`}>GET FREE QUOTE!</h1>
<p className={`${poppinsB.className} text-center border-y-4 py-3 px-2 border-solid border-navYellow text-xl`}>1 (920)-636-08-31</p>
</div>

</div>       
                    <h2 className={` md:text-xl ml-[4%] ${poppinsL.className} mt-4 mb-7 `}>Top Tier Landscaping Services - Transforming your outdoors.</h2>

        </section>
    )
}