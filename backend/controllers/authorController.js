const Author = require("../models/authorModel");
const mongoose = require("mongoose");

// ver todos los autores
const getAuthors = async (req, res) => {
    const authors = await Author.find({});
    res.status(200).json(authors);
};

// ver un solo autor
const getAuthor = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No existe tal autor" });
    }

    const author = await Author.findById(id);

    if (!author) {
        return res.status(404).json({ error: "No existe tal autor" });
    }

    res.status(200).json(author);
};

// crear un nuevo autor
const createAuthor = async (req, res) => {
    const { name, bio } = req.body;

    try {
        const author = await Author.create({
            name,
            bio,
        });
        res.status(200).json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// eliminar un autor
const deleteAuthor = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No existe tal autor" });
    }

    const author = await Author.findOneAndDelete({ _id: id });

    if (!author) {
        return res.status(404).json({ error: "No existe tal autor" });
    }

    res.status(200).json(author);
};
// actualizar un autor
const updateAuthor = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No existe tal autor" });
    }

    const author = await Author.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!author) {
        return res.status(404).json({ error: "No existe tal autor" });
    }

    res.status(200).json(author);
};

module.exports = {
    createAuthor,
    getAuthor,
    getAuthors,
    deleteAuthor,
    updateAuthor,
};
