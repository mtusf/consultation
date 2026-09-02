import express from "express";
import consultationRoute from "./src/routes/consultation.route.js";
import consultationWorker from "./src/workers/consultation.worker.js";
import morgan from "morgan";
const app = express();
const PORT = 6000

app.use(express.json());
app.use(morgan("dev"))
app.use('/api', consultationRoute);
app.use((err, req, res, next) => {
    console.error("ERROR:", err);
    res.status(err.statusCode || 500).json({
        message: err.message || "Unknown error",
        error: String(err)
    });
});

app.listen(PORT, ()=> {
    console.log(`server running at http://localhost:${PORT}`);
})