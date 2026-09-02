import { Queue } from "bullmq";
import config from "../config/env.config.js";
export const connection = {
   host:config.REDIS_HOST,
   port:config.REDIS_PORT
}


const  consultationQueues = new Queue('consultation', {connection})
export default  consultationQueues