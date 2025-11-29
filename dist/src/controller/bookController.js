import Book from '../model/bookModel.js';
export const getBook = async (req, res) => {
    try {
        const books = await Book.find({}, { __v: 0 });
        res.status(200).json({
            "response": 'Livros retornados com sucesso!',
            "books": books
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            "response": 'Erro ao retornar livros',
            "error": error
        });
    }
};
export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id, { __v: 0 });
        res.status(200).json({
            "response": 'Livro retornado com sucesso!',
            "book": book
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            "response": 'Erro ao retornar livro',
            "error": error
        });
    }
};
export const createBook = async (req, res) => {
    try {
        const { title, author, price } = req.body;
        const book = new Book({ title, author, price });
        await book.save();
        res.status(201).json({
            "response": 'Livro criado com sucesso!',
            "id": book._id,
            "book": book
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            "response": 'Erro ao criar livro',
            "error": error
        });
    }
};
export const updateBook = async (req, res) => {
    try {
        const { title, author, price } = req.body;
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({
                "response": 'Livro nao encontrado!',
                "error": 'Livro nao encontrado!'
            });
        }
        book.title = title;
        book.author = author;
        book.price = price;
        await book.save();
        res.status(201).json({
            "response": 'Livro  atualizado com sucesso!',
            "id": book._id,
            "book": book
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            "response": 'Erro ao atualizar livro',
            "error": error
        });
    }
};
export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({
                "response": 'Livro nao encontrado!',
                "error": 'Livro nao encontrado!'
            });
        }
        res.status(201).json({
            "response": 'Livro deletado com sucesso!',
            "id": book._id,
            "book": book
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            "response": 'Erro ao deletar livro',
            "error": error
        });
    }
};
export const erroMethod = (req, res) => {
    if (req.method === "HEAD" || req.method === "PATCH") {
        res.send("Metodo nao permitido para essa rota!");
    }
};
