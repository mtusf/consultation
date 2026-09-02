import dotenv from "dotenv";
dotenv.config();

if (!process.env.MAIL_USER) {
    throw new Error("Mail user not found!")
}
if (!process.env.MAIL_PASS) {
    throw new Error("Mail password not found!")
}
if (!process.env.MAIL_HOST) {
    throw new Error("Mail host not found!")
}
if (!process.env.PORT) {
    throw new Error("PORT is not found!")
}
if (!process.env.REDIS_URL) {
    throw new Error("Redis url is not found!")
}
if (!process.env.REDIS_HOST) {
    throw new Error("Redis host not found!")
}
if (!process.env.REDIS_PORT) {
    throw new Error("Redis port not found!")
}

const config = {
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT
}
export default config