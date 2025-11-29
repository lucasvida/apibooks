import express from "express";
import env from "dotenv";
import cors from "cors";
import mainRoute from "./routes/mainRoute.js";
import connectDB from "./config/dbConnect.js";
import helmet from "helmet";
env.config();
const port = process.env.PORT || 3000;
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use('/', mainRoute);
app.listen(port, () => {
    console.log(`Servidor Ativo na porta ${port} - http://localhost:${port}`);
});
