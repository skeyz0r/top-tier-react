'use client'
import { useState } from "react"

export default function Contact()
{

const [cont, setCont] = useState({fname: '', lname: '', email: '', num: '', mes: ''})

    return(
        <main className="md:py-[100px]">
         <div id="formCont">
    <form className="form" method="POST">
    <p className="title">Contact Us </p>
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


        </main>
    )
}