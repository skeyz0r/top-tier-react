
import Image from "next/image"
import { DM_Sans, Raleway } from "next/font/google"
import { Rubik } from "next/font/google"

const dmsans = DM_Sans({
  weight: '700',
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
      <h1 className={`${rubik.className} text-white text-6xl brightness-100 tracking-wider`}>TOP TIERS SERVICES</h1>
            <span className="text-white text-xl mt-3">We pride ourselves on our attention to detail</span>
            <span className="text-white text-xl"> and our commitment to providing excellent customer service.</span>
        </div>
    <div className="flex flex-wrap gap-10 shadow-mainsh justify-center md:justify-evenly py-12 px-6">
      <div className="card  bg-black rounded-md w-fit flex flex-col justify-center items-center cursor-pointer  ">
        <Image
        alt="houseServImg"
        className="crdimg rounded-t-md  h-full"
          src={'/services/houseServ.jpg'}
          width={300}
          height={500}
        />
        <h2 className={`${dmsans.className} text-white py-1 text-2xl`}>House Services</h2>
      </div>

      <div className="card  bg-black rounded-md w-fit flex flex-col justify-center items-center cursor-pointer  ">
        <Image
        alt="landServImg"
        className="crdimg rounded-t-md  h-full"
          src={'/services/landscapping.jpg'}
          width={300}
          height={500}
        />
        <h2 className={`${dmsans.className} py-1 text-white text-2xl`}>Landscaping</h2>
      </div>

      <div className="bg-black card rounded-md w-fit flex flex-col justify-center items-center cursor-pointer  ">
        <Image
        alt="comServImg"
        className="crdimg rounded-t-md  h-full"
          src={'/services/comServ.jpg'}
          width={300}
          height={500}
        />
        <h2 className={`${dmsans.className} py-1 text-white text-2xl`}>Commercial Services</h2>
      </div>

      <div className="card  bg-black rounded-md w-fit flex flex-col justify-center items-center cursor-pointer  ">
        <Image
        alt="plowServImg"
        className="crdimg rounded-t-md  h-full"
          src={'/services/plowImg.jpg'}
          width={300}
          height={500}
        />
        <h2 className={`${dmsans.className} py-1 text-white text-2xl`}>Plowing Services</h2>
      </div>

    </div>



    <div className="py-6 px-3">
               <h2 className={`${raleway.className} md:text-2xl py-3`}><strong> Top Tier Services LLC</strong> - we are your trusted partner for transforming spaces and ensuring they shine in their best light. 
                Our comprehensive range of services is designed to cater to all your property needs, from intricate house repairs to crafting picturesque landscapes, and even maintaining pristine cleanliness. 
                With a keen eye for detail and a commitment to excellence, we take your vision and turn it into reality.</h2>
              <h2 className={`${rubik.className} pl-4 py-5 text-lg md:text-2xl`}><strong>Our services include:</strong></h2>
              <div className="flex gap-2 justify-evenly flex-wrap">

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

            <div className="pt-4 lg:w-2/3 pl-4 lg:pl-14">
            <h2 className={`${rubik.className} pl-4 py-5 text-lg md:text-2xl`}><strong>Why choose us?</strong></h2>
                <p>Top Tier Services LLC doesn't just provide services – we craft experiences.
                 With a dedication to quality, an eye for detail, and a passion for perfection, we take your visions and turn them into reality.
                 Our team of experts is committed to delivering results that exceed your expectations, every time.</p>
            </div>
            </div>
    

   </section>
  )
}
