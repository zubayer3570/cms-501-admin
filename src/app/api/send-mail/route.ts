import { User } from "@/server/Models/User";
import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.mymangomail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "company@nextctl.com",
        pass: "nextdev101",
    },
});

export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();
        console.log(data)
        const info = await transporter.sendMail({
            from: 'company@nextctl.com', // sender address
            to: "company@nextctl.com", // list of receivers
            subject: data.subject, // Subject line
            text: JSON.stringify(data), // plain text body
            html: `
            <div>
                <p>Name: ${data.name}</p>
                <p>From: ${data.email}</p>
                <p>Subject: ${data.subject}</p>
                <p>phone: ${data.phone}</p>
                <p>message: ${data.message}</p>
                <p>message: ${data.topic}</p>
            </div>
            
            `, // html body
        });
        return NextResponse.json({ message: { messageId: info.messageId } })
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}