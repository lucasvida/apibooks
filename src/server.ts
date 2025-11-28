import express from "express";
import env from "dotenv";
import mainRoute from "./routes/mainRoute.js";
import connectDB from "./config/dbConnect.js";
import helmet from "helmet";
env.config();

const port = process.env.PORT || 3000;
connectDB();
const app = express();
app.use(express.json());
app.use(helmet());
app.use('/', mainRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port} - http://localhost:${port}`);
});
