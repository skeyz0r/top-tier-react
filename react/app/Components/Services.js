
import Image from "next/image"
import Link from "next/link"
import { DM_Sans, Raleway, Comfortaa } from "next/font/google"
import { Rubik } from "next/font/google"

/* fonts */
const dmsans = DM_Sans({
  weight: '700',
  subsets: ['latin'],
})

const comfortaa = Comfortaa({
    weight: '600',
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
   <section className="flex flex-col w-11/12 self-center shadow-mainsh">



        <div className="flex flex-col justify-center items-center w-full imgd rounded-rb bg-[url('../public/image.jpg')] h-500px">
      <h1 className={`${rubik.className} text-white  text-3xl md:text-6xl brightness-100 tracking-wider`}>TOP TIERS SERVICES</h1>
            <span className="text-center text-white md:text-xl mt-3">We pride ourselves on our attention to detail</span>
            <span className="text-center text-white md:text-xl"> and our commitment to providing excellent customer service.</span>
        </div>

    <div className="flex flex-wrap gap-10 shadow-mainsh justify-evenly py-12 px-6">
     <Link href={'/services/house-service'}  className={`${comfortaa.className} card text-lg text-blue-800 hover:underline my-6 rounded-md  `}>
        <Image
        alt="houseServImg"
        className="crdimg rounded-md shadow-card h-full mb-3"
          src={'/services/houseServ.jpg'}
          width={224}
          height={150}
        />
      House & Commercial 
      </Link>

     <Link href={'/services/HouseService'}  className={`${comfortaa.className} card text-lg text-blue-800 hover:underline my-6 rounded-md  `}>
        <Image
        alt="landServImg"
        className="crdimg rounded-md shadow-card h-full mb-3"
          src={'/services/landscapping.jpg'}
          width={224}
          height={150}
        />
        Landscaping
      </Link>


     <Link href={'/services/HouseService'}  className={`${comfortaa.className} card text-lg text-blue-800 hover:underline my-6 rounded-md  `}>
        <Image
        alt="plowServImg"
        className="crdimg rounded-md shadow-card h-full mb-3"
          src={'/services/plowImg.jpg'}
          width={224}
          height={150}
        />
        Plowing Services
      </Link>

    </div>



    <div className="py-6 px-3 flex flex-col">
               <h2 className={`${raleway.className} md:text-2xl max-w-hd py-3`}><strong> Top Tier Services LLC</strong> - we are your trusted partner for transforming spaces and ensuring they shine in their best light. 
                Our comprehensive range of services is designed to cater to all your property needs, from intricate house repairs to crafting picturesque landscapes, and even maintaining pristine cleanliness. 
                With a keen eye for detail and a commitment to excellence, we take your vision and turn it into reality.</h2>
              
              <h2 className={`${rubik.className} pl-4 mt-9 py-5 text-lg md:text-2xl`}><strong>Our services include:</strong></h2>
              
              <div className="flex gap-2 mb-9 justify-between flex-wrap xxl:w-[70%] self-center">
              <div className="py-3 max-w-[600px]">
              <h3 className={`${dmsans.className}`}>House Repair Expertise:</h3>
<p>From minor fixes to major renovations, our skilled handymen are equipped to handle a wide spectrum of house repair services. 
Whether it's a leaky faucet, a squeaky door, or a more complex project, we bring expertise and precision to every job, leaving your home flawless and functional.</p>
            </div>

            <div className="py-3 max-w-[600px]">
              <h3 className={`${dmsans.className}`}>Landscaping:</h3>
<p>Unveil the true potential of your outdoor haven.
 Our landscaping services encompass everything from intricate lawn rolling to imaginative designs that transform mere yards into breathtaking escapes.
 Experience the beauty of nature right at your doorstep.</p>
            </div>

            <div className="py-3 max-w-[600px]">
              <h3 className={`${dmsans.className}`}>Snow Plowing:</h3>
<p>With a focus on both residential and commercial properties, we clear the way for safe and seamless transitions.
 Our snow plowing services ensure your property remains accessible and hazard-free, no matter the weather.</p>
            </div>

            <div className="py-3 max-w-[600px]">
              <h3 className={`${dmsans.className}`}>Additional services:</h3>
<p>We also provide home, gutter, and commercial cleaning services that bring a new level of freshness and order to your spaces. 
Experience the joy of pristine environments that invigorate your senses and create a lasting impression.</p>
            </div>

            </div>

            <div className="pt-4 lg:w-2/3 pl-4 ">
            <h2 className={`${rubik.className} pl-6 py-5 text-lg md:text-2xl`}><strong>Why choose us?</strong></h2>
                <p>Top Tier Services LLC doesn't just provide services – we craft experiences.
                 With a dedication to quality, an eye for detail, and a passion for perfection, we take your visions and turn them into reality.
                 Our team of experts is committed to delivering results that exceed your expectations, every time.</p>
            </div>
            </div>
    

   </section>
  )
}
