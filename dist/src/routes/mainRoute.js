import express from "express";
import bookRoute from "./bookRoute.js";
const mainRoute = express.Router();
mainRoute.get('/', (req, res) => {
    res.send('Hello World!');
});
mainRoute.use('/books', bookRoute);
export default mainRoute;
