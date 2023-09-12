import { NextResponse } from "next/server";
export async function POST(request) {
  const res = await request.json();
  console.log(res);
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.titan.email",
    auth: {
      user: "admin@indrajohn.com.au",
      pass: "P@ssw0rd123!", // Use environment variables for security reasons
    },
    secure: true,
  });

  const mailData = {
    from: "admin@indrajohn.com.au",
    to: "admin@indrajohn.com.au",
    subject: `Message From Contact me`,
    text: JSON.stringify(res), // Convert object to string
    html: `<div>${JSON.stringify(res)}</div>`, // Convert object to string
  };

  try {
    const info = await transporter.sendMail(mailData);
    console.log(info);
  } catch (err) {
    console.log(err);
  }

  return NextResponse.json({ res });
}
