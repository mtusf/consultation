import transporter from "../config/mail.config.js";
import { sendEmailTemp } from "../templates/send-email-template.js";

async function sendMail({ phone, email, fullName, service, projectDetail, company }) {
    try {

        const template = await sendEmailTemp({
            email,
            service,
            phone,
            projectDetail,
            company,
            fullName
        })

        await transporter.sendMail({

            to: email,
            subject: service,
            html: template
        })
     


    } catch (error) {
        console.log("Error in mail service", error)
        throw error
    }

}

export default sendMail