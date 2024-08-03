import nodemailer from "nodemailer";

const sendEmail = async (email, subject, text) => {
    const emailTest = "wassimhssin10@gmail.com"
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.PORT,
            secure: process.env.SECURE ,
            auth: {
                user: process.env.USER_NODEMAILER,
                pass: process.env.PASS_NODEMAILER,
            },
        });

        await transporter.sendMail({
            from: process.env.USER_NODEMAILER,
            to: emailTest,
            subject: subject,
            text: text,
        });

        console.log("email sent successfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

export default sendEmail;
