const express = require("express");
const router = express.Router();
const Genre = require("../models/genreModel");
const {
    createGenre,
    getGenre,
    getGenres,
    deleteGenre,
    updateGenre,
} = require("../controllers/genreController");

// GET todos los generos
router.get("/", getGenres);
// GET un solo genero
router.get("/:id", getGenre);
// POST un genero
router.post("/:id", createGenre);
// DELETE un genero
router.delete("/:id", deleteGenre);
// UPDATE un genero
router.patch("/:id", updateGenre);

module.exports = router;
