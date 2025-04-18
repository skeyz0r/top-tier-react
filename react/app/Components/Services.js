
import Image from "next/image"
import Link from "next/link"
import { DM_Sans, Raleway, Comfortaa, Roboto } from "next/font/google"
import { Rubik } from "next/font/google"
import Buttons from "./Buttons"

/* fonts */
const dmsans = DM_Sans({
  weight: '700',
  subsets: ['latin'],
})

const comfortaa = Comfortaa({
    weight: '700',
    subsets: ['latin'],
  })

const rob = Roboto({
  weight: '400',
  subsets: ['latin'],
})


const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
})


const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
})


export default function Services() {
  return (
   <section className="flex flex-col bg-[#f3f3f326] mt-20 w-11/12 self-center shadow-mainsh">



        <div  id="srvImg" className=" flex flex-col justify-center items-center w-full imgd rounded-rb h-[400px] md:h-[600px] 2xl:h-[800px] ">
      <h1 className={`${rubik.className} text-white  text-3xl md:text-6xl brightness-100 tracking-wider`}>TOP TIERS SERVICES</h1>
        <p id="srvCont"   className="text-center text-white sm:w-fit w-[80%] lg mt-6 md:text-2xl">Construction | Landscaping | Plowing Services in Wisconsin</p>
        </div>

    <div  className="flex flex-wrap gap-14 shadow-mainsh justify-evenly py-12 px-6">
     <Link href={'/services/house-service'} className={`${comfortaa.className} card transition-all text-xl h-[200px] text-white   rounded-xl  `}>
        <Image
        alt="houseServImg"
        className=" brightness-[.6] hover:brightness-100 rounded-xl shadow-card h-full mb-3 "
          src={'/services/handyman.jpg'}
          width={300}
          height={10}
        />
      <span className="relative srn transition-all left-3 bottom-20 my-6">House & Commercial</span>
      </Link>

     <Link href={'/services/landscaping'}  className={`${comfortaa.className} card transition-all text-xl h-[200px] text-white   rounded-xl  `}>
        <Image
        alt="landServImg"
        className=" brightness-[.6] hover:brightness-100 rounded-xl shadow-card h-full mb-3 "
          src={'/services/landscapeSrv.jpg'}
          width={300}
          height={10}
        />
        <span className="relative srn transition-all left-3 bottom-20 my-6">Landscaping</span>
      </Link>


     <Link href={'/services/plowing'}  className={`${comfortaa.className} card transition-all text-xl h-[200px] text-white   rounded-xl  `}>
        <Image
        alt="plowServImg"
        className=" brightness-[.6] hover:brightness-100 rounded-xl shadow-card h-full mb-3 "
          src={'/services/plow.jpg'}
          width={300}
          height={10}
        />
       <span className="relative srn transition-all left-3 bottom-20 my-6">Plowing Services</span>
      </Link>

    </div>



    <div className="py-6 px-3 flex flex-col">
               <h2 className={`${raleway.className} md:text-2xl max-w-hd py-3`}><strong> Top Tier Services LLC</strong> - we are your trusted partner for transforming spaces and ensuring they shine in their best light. 
                Our comprehensive range of services is designed to cater to all your property needs, from intricate house repairs to crafting picturesque landscapes, and even maintaining pristine cleanliness. 
                With a keen eye for detail and a commitment to excellence, we take your vision and turn it into reality.</h2>
              
              <h2 className={`${rubik.className} pl-4 mt-9 py-5 pt-0 text-lg md:text-2xl`}><strong>Our services include:</strong></h2>
              
             <div className="flex items-center justify-center flex-wrap-reverse xl:flex-nowrap border-t border-b">
              <div  className="flex md:w-[50%] 2xl:w-[70%] pb-10 xl:pt-10 pt-0   mb-9 gap-7 flex-wrap  self-center">
             
              <div className="py-3 px-5 border rounded-2xl shadow-faint max-w-[610px]">
              <h3 className={`mb-1 ${dmsans.className}`}>House Repair:</h3>
              <p className={`${rob.className}text-gray-600`}>From minor fixes to major renovations, our skilled handymen are equipped to handle a wide spectrum of house repair services. 
</p>            </div>

            <div className="py-3 px-5 border rounded-2xl shadow-faint max-w-[610px]">
              <h3 className={`mb-1 ${dmsans.className}`}>Landscaping:</h3>
              <p className={`${rob.className}text-gray-600`}>Unveil the true potential of your outdoor haven.
 Our landscaping services encompass everything from intricate lawn rolling to imaginative designs that transform mere yards into breathtaking escapes.
</p>
            </div>

            <div className="py-3 px-5 border rounded-2xl shadow-faint max-w-[610px]">
              <h3 className={`mb-1 ${dmsans.className}`}>Snow Plowing:</h3>
              <p className={`${rob.className}text-gray-600`}>With a focus on both residential and commercial properties, we clear the way for safe and seamless transitions.
</p>
            </div>

            <div className="py-3 px-5 border rounded-2xl shadow-faint max-w-[610px]">
              <h3 className={`mb-1 ${dmsans.className}`}>Additional services:</h3>
              <p className={`${rob.className}text-gray-600`}>We also provide home, gutter, and commercial cleaning services that bring a new level of freshness and order to your spaces. 
</p>
            </div>

            </div>

              <Image alt="constructionImg" className="flex object-contain" src={'/headi.png'} width={671} height={344} />

            </div>

            <div className="whh flex flex-wrap items-center justify-between sm:px-10  pt-4 w-full pl-4">
              <div className="why">
            <h2 className={`${rubik.className} pl-6 py-5 text-lg md:text-2xl `}><strong>Why choose us?</strong></h2>
                <p className={`text-lg `}> Top Tier Services LLC doesn't just provide services – we craft experiences.
                 With a dedication to quality, an eye for detail, and a passion for perfection, we take your visions and turn them into reality.
                 Our team of experts is committed to delivering results that exceed your expectations, <strong>every time</strong>.</p>
              </div>
                 <Buttons/>
            </div>
            </div>
    

   </section>
  )
}
