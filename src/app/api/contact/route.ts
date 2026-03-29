import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type FormData = {
  name: string;
  secondname?: string;
  email: string;
  number: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('📩 Received contact form data:', body);
    const { name, secondname, email, number, message } = body as FormData;

    if (!name || !email || !number || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECIPIENT_EMAIL) {
      console.error('❌ Missing environment variables for email');
      return NextResponse.json({ success: false, error: 'Internal configuration error' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Host on PDL Website" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: 'New Contact Message from Host on PDL Website',
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name} ${secondname || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${number}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    console.log('✅ Email sent successfully:', info.messageId);

    return NextResponse.json({ success: true }, { status: 200 });
  }
  catch (error: unknown) {
    console.error('❌ Error in contact API route:', error);
    let errorMessage = 'Failed to send email';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
