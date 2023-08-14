import Link from "next/link"

export default function Footer()
{

   

    return(
        <footer className={`w-full flex-col border-t justify-center items-center flex border-black border-solid bg-navYellow`}>
            <div className="flex py-1 gap-2">
                    <Link className="hover:underline" href={'/policy/privacy'}>Privacy Policy</Link>
                    <p>|</p>
                    <Link className="hover:underline" href={'/policy/conditions'}>Conditions of Use</Link>
            </div>
            <h2>Top Tier Services LLC ALL RIGHTS RESERVED</h2>
        </footer>
    )
}