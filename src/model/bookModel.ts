import mongoose from "mongoose";

interface Book {
    title: string;
    author: string;
    price: number;
}

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true }
});

const Book = mongoose.model<Book>('Book', bookSchema);

export default Book;
