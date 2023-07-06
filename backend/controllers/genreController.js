const Genre = require("../models/genreModel");
const mongoose = require("mongoose");

// ver todos los generos
const getGenres = async (req, res) => {
    const genres = await Genre.find({});
    res.status(200).json(genres);
};

// ver un solo genero
const getGenre = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No existe tal genero" });
    }

    const genre = await Genre.findById(id);

    if (!genre) {
        return res.status(404).json({ error: "No existe tal genero" });
    }

    res.status(200).json(genre);
};

// crear un nuevo genero
const createGenre = async (req, res) => {
    const { name, img } = req.body;

    try {
        const genre = await Genre.create({
            name,
            img,
        });
        res.status(200).json(genre);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// eliminar un genero
const deleteGenre = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No existe tal genero" });
    }

    const genre = await Genre.findOneAndDelete({ _id: id });

    if (!genre) {
        return res.status(404).json({ error: "No existe tal genero" });
    }

    res.status(200).json(genre);
};
// actualizar un genero
const updateGenre = async (req, res) => {
    const { id, img } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No existe tal genero" });
    }

    const genre = await Genre.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
            img,
        }
    );

    if (!genre) {
        return res.status(404).json({ error: "No existe tal genero" });
    }

    res.status(200).json(genre);
};

module.exports = {
    createGenre,
    getGenre,
    getGenres,
    deleteGenre,
    updateGenre,
};
