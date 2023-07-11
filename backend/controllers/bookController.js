const Book = require("../models/bookModel");
const mongoose = require("mongoose");


// ver todos los libros
const getBooks = async (req, res) => {
    const books = await Book.find({}).sort({ createdAt: -1 });
    res.status(200).json(books);
};

// ver un solo libro
const getBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No existe tal libro" });
    }

    const book = Book.findById(id);

    if (!book) {
        return res.status(400).json({ error: "No existe tal libro" });
    }

    res.status(200).json(book);
};

// crear un nuevo libro
const createBook = async (req, res) => {
    const { title, summary, author, genre, download } = req.body;
    try {
        const book = await Book.create({
            title,
            summary,
            author,
            genre,
            download,
            portada,
        });
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// eliminar un libro
const deleteBook = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No existe tal libro" });
    }

    const book = await Book.findOneAndDelete({ _id: id });

    if (!book) {
        return res.status(404).json({ error: "No existe tal libro" });
    }

    res.status(200).json(book);
};
// actualizar un libro
const updateBook = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No existe tal libro" });
    }

    const book = await Book.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!book) {
        return res.status(404).json({ error: "No existe tal libro" });
    }

    res.status(200).json(book);
};

module.exports = {
    createBook,
    getBooks,
    getBook,
    deleteBook,
    updateBook,
};
