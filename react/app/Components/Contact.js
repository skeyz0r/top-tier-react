'use client'
import { useState } from "react"
import Slideshow from "./Slideshow"
import {GrFacebook} from "react-icons/gr"
import Link from "next/link"
import { Open_Sans } from "next/font/google"


const opens = Open_Sans({
  weight: '300',
  subsets: ['latin'],
})

export default function Contact()
{

const [cont, setCont] = useState({fname: '', lname: '', email: '', num: '', mes: ''})

    return(
        <div className="flex flex-wrap justify-evenly">
         <div id="formCont">
    <form className="form" method="POST">
    <h3 className={`${opens.className} text-green-600 md:text-2xl py-3`}>CALL - 1 (920) 636-0831 OR</h3>
   <div className="flex gap-2 items-center">
   <Link target="_blank" href={'https://www.facebook.com/groups/801973678237251'}><GrFacebook size={30} color={'blue'}/></Link>
    <p className="title">Contact Us </p>
</div>
    <p className="message">Please don't hesitate to contact us for any questions or services!</p>
        <div className="flexi">
        <label>
            <input value={cont.fname} onChange={(e) => {setCont({...cont, fname: e.target.value})}} required placeholder="" type="text" className="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input value={cont.lname} onChange={(e) => {setCont({...cont, lname: e.target.value})}} required placeholder="" type="text" className="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input value={cont.email} onChange={(e) => {setCont({...cont, email: e.target.value})}} required placeholder="" type="email" className="input"/>
        <span>Email</span>
    </label> 

    <label>
        <input value={cont.num} onChange={(e) => {setCont({...cont, num: e.target.value})}} required placeholder="" type="number" className=" appearance-none input"/>
        <span>Phone</span>
    </label> 
        
    <label>
        <textarea value={cont.mes} onChange={(e) => {setCont({...cont, mes: e.target.value})}} required placeholder="Message" type="text" className="input"></textarea>
    </label>

    <button onClick={console.log(cont.fname)} className="submit">Send</button>
</form>
</div>

<Slideshow/>
        </div>
    )
}