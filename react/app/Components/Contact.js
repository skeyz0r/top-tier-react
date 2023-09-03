


export default function Contact()
{
    return(
        <main className="py-[100px]">
         <div id="formCont">
    <form className="form" action="toptierservices9@gmail.com" method="POST">
    <p className="title">Contact Us </p>
    <p className="message">Please don't hesitate to contact us for any questions or services!</p>
        <div className="flexi">
        <label>
            <input required placeholder="" type="text" className="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required placeholder="" type="text" className="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required placeholder="" type="email" className="input"/>
        <span>Email</span>
    </label> 

    <label>
        <input required placeholder="" type="number" className="input"/>
        <span>Phone</span>
    </label> 
        
    <label>
        <textarea required placeholder="Message" type="text" className="input"></textarea>
    </label>

    <button class="submit">Send</button>
</form>
</div>


        </main>
    )
}