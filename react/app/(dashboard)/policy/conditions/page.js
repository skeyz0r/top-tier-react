import Link from "next/link"

export default function Conditions()

{
    return(
        <main className="flex flex-col w-full py-20">
        <div className="w-[90%] sm:w-[85%] px-3 md:px-10 py-10 self-center shadow-mainsh">
        <h1>Top Tier Services LLC - Conditions of Use</h1>    
         <p className={`my-1 md:w-[80%]`}>Welcome to Top Tier Services LLC ("Top Tier Services," "we," "us," or "our"). Before using our landscaping, plowing, or handyman services, please read these Conditions of Use carefully. By accessing or using any of our services, you agree to comply with and be bound by these conditions. If you do not agree with these conditions, please do not use our services.</p>
    
         <strong><h2 className={`my-6 text-lg`}>1. Acceptance of Terms:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>By using our services, you acknowledge that you have read, understood, and agreed to these Conditions of Use. You also agree to our <Link className="text-blue-600" href={'/privacy'}>Privacy Policy</Link>, which outlines how we collect, use, and protect your personal information.</p>
    
         <strong><h2 className={`my-6 text-lg`}>2. Eligibility:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>You must be at least 18 years old to use our services. By using our services, you represent and warrant that you are of legal age to enter into a binding contract with Top Tier Services LLC.</p>
    
         <strong><h2 className={`my-6 text-lg`}>3. Services Offered:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>Top Tier Services LLC provides landscaping, plowing, and handyman services to residential and commercial customers. The specific services, terms, and pricing may vary and will be outlined in your service agreement or estimate.</p>
    
         <strong><h2 className={`my-6 text-lg`}>4. Service Agreement:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>Before commencing any work, you will be provided with a written service agreement or estimate that outlines the scope of the services, pricing, and any additional terms and conditions. You must review and sign this agreement before we start work on your project.</p>
    
         <strong><h2 className={`my-6 text-lg`}>5. Payment Terms:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>Payment for services rendered is due as outlined in your service agreement or estimate. We accept various payment methods, including credit/debit cards, checks, and electronic payments. Failure to make timely payments may result in additional fees and delays in service.</p>
    
         <strong><h2 className={`my-6 text-lg`}>6. Scheduling and Cancellation:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>We will work with you to schedule services at a mutually agreed-upon time. If you need to cancel or reschedule an appointment, please provide at least [insert notice period] notice. Failure to provide sufficient notice may result in cancellation fees.</p>
    
         <strong><h2 className={`my-6 text-lg`}>7. Warranty and Satisfaction Guarantee:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>We stand behind the quality of our work. If you are not satisfied with the services provided, please contact us within [insert satisfaction guarantee period] days, and we will work to resolve the issue to your satisfaction. Warranty details for specific services will be outlined in your service agreement.</p>
    
         <strong><h2 className={`my-6 text-lg`}>8. Code of Conduct:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>You agree to treat our employees, contractors, and representatives with respect and courtesy. Any form of harassment, discrimination, or abusive behavior will not be tolerated.</p>
    
         <strong><h2 className={`my-6 text-lg`}>9. Safety and Compliance:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>We prioritize safety and compliance with all applicable laws and regulations. You agree to provide a safe working environment for our team and to comply with any local permits or regulations related to the services provided.</p>
    
         <strong><h2 className={`my-6 text-lg`}>10. Termination of Services:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>We reserve the right to terminate or refuse services at our discretion if you violate these Conditions of Use or if your actions pose a risk to the safety of our team or the quality of our services.</p>
    
         <strong><h2 className={`my-6 text-lg`}>11. Changes to Conditions:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>Top Tier Services LLC may update these Conditions of Use from time to time. Any changes will be posted on our website, and the updated version will apply to all subsequent use of our services.</p>
    
         <strong><h2 className={`my-6 text-lg`}>12. Contact Us:</h2></strong>
         <p className={`my-1 md:w-[80%]`}>If you have any questions, concerns, or feedback regarding these Conditions of Use or our services, please contact us at [insert contact information].</p>
    
         <p className={`my-1 md:w-[80%]`}>Thank you for choosing Top Tier Services LLC. We look forward to providing you with top-quality landscaping, plowing, and handyman services.</p>
        </div>
        </main>
    
    )
}