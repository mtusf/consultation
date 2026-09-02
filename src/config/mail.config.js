import nodemailer from "nodemailer";
import config from "../config/env.config.js";
const transporter = nodemailer.createTransport({
    host: config.MAIL_HOST,
    port: config.MAIL_PORT,
    auth: {
        user: config.MAIL_USER,
        pass: config.MAIL_PASS
    }
})

export default transporter