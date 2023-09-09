import { NextResponse } from "next/server";
import { Resend } from "resend";
import Template from "../Components/Template";
const resend = new Resend(process.env.RESEND_KEY)

export async function POST(request)
{
    const body = await request.json()

    const {fname, lname, num, email, text} = body;
    try{
    
        const data = await resend.emails.send({
            from: 'Trevor <donotrespond@top-tier-services.com>',
            to: ['uvandistar@gmail.com'],
            subject: 'New Message from the Website',
            react: Template(fname, lname, num, email, text) ,
          });
          return NextResponse.json(data);
        } catch (error) {
          return NextResponse.json({ error });
        }
}