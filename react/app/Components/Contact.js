'use client'
import { useState } from "react"
import {GrFacebook} from "react-icons/gr"
import Link from "next/link"
import { Open_Sans } from "next/font/google"


const opens = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function Contact()
{

const [cont, setCont] = useState({fname: '', lname: '', email: '', num: '', mes: ''});
const [send, setSend] = useState('Send');

async function sendEmail(e) {
    if(cont.fname === '' || cont.lname === '' || cont.email === '' || cont.num === '' || cont.mes === '')
    {
        setTimeout( () => setSend('Send'), 5000)
        setSend('ERROR');
    }
    else
    {
    setSend('Sending...')
    e.preventDefault();
   const res = await fetch('api', {
      method: 'POST',
      body: JSON.stringify(cont),
  })
          if(res.status === 200)
          {
            setTimeout( () => setSend('Send'), 7000)
          setSend('Sent!');

          }
          else
          {
            alert('ERROR ', res)
          }
        }
   }

    return(
        <div id="contF" className="py-10 flex flex-wrap justify-evenly">
         <div id="formCont" className="flex-col w-full">
         <div className="flex flex-col items-center justify-center">
         <div className={`${opens.className} flex gap-3 items-center text-green-600 md:text-2xl py-3`}>CALL - <h2> 1 (920) 636-0831 </h2> OR VISIT 
    <Link className="rounded-md" target="_blank" href={'https://www.facebook.com/groups/801973678237251'}><GrFacebook size={30} color={'blue'}/></Link>
</div>
   <div className="flex gap-2 items-center">
    <p className="title">You may also Contact us directly</p>
</div>
         </div>
    <form className="form self-center" method="POST">
    <p className="message">Please fill out the following...</p>

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

    <button onClick={(e)=>{sendEmail(e)}} className="submit">{send}</button>
</form>
</div>
        </div>
    )
}