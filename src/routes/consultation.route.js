import { Router } from "express";
const contactRoute = Router();
import consultationController from "../controllers/consultation.controller.js";

contactRoute.post('/consultation', consultationController);
export default contactRoute