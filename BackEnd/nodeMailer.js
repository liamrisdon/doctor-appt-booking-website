// elitecaretest7@gmail.com
// EliteCare123

import nodemailer from 'nodemailer';
// import Mail from "nodemailer/lib/mailer";

const html = `

<h1> EliteCare test <h1>
<p> using nodemailer <p>

`;

async function mail() {

    const transport = nodemailer.createTransport({

        service: 'Gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'elitecaretest7@gmail.com',
            pass: 'EliteCare123'
        }

    });

    const info = await transport.sendMail({

        from: 'EliteCare test <elitecaretest7@gmail.com>',
        to: 'liamrisdon22@gmail.com',
        subject: "Test email!",
        html: html,
    })

    console.log("message: sent: " + info.messageId);




}

mail();
// .catch (e => console.log(e));