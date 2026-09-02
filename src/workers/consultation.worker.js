import { Worker } from "bullmq";
import sendMail from "../services/mail.service.js"
import IORedis from "ioredis";
import config from "../config/env.config.js";

const connection = new IORedis({
    host: config.REDIS_HOST,
    port: config.REDIS_PORT,
    maxRetriesPerRequest: null,
});

const consultationWorker = new Worker('consultation', async (job) => {
    try {
        console.log("job data", job.data);
        await sendMail({
            fullName: job.data.fullName,
            email: job.data.email,
            phone: job.data.phone,
            company: job.data.company,
            service: job.data.service,
            projectDetail: job.data.projectDetail
        });

    } catch (err) {
        console.log("error in worker", err.message)
        throw err
    }

}, { connection });
consultationWorker.on("completed", (job) => {
    console.log(`Job ${job.id} completed`)
});

consultationWorker.on("failed", (job) => {
    console.log(`Job ${job.id} failed`)
});

export default consultationWorker