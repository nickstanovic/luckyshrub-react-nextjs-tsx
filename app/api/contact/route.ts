// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: 'nickstanovic@gmail.com',
        subject: `Lucky Shrub Message from ${name}`,
        text: `Email: ${email}\n\nMessage: ${message}`,
    };

    const mailResult = await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });
    });

    return mailResult instanceof Error
        ? NextResponse.error()
        : NextResponse.json({ message: 'Email sent successfully!' });
}
