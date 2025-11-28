import express from "express";
import { createBook, getBookById, updateBook, deleteBook, getBook, erroMethod } from "../controller/bookController.js";
const bookRoute = express.Router();

bookRoute.get('/:id', getBookById);
bookRoute.get('/', getBook);
bookRoute.post('/', createBook);
bookRoute.put('/:id', updateBook);
bookRoute.delete('/:id', deleteBook);

bookRoute.use("/", erroMethod);


export default bookRoute;
