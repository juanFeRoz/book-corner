const express = require("express");
const router = express.Router();
const Author = require("../models/authorModel");
const {
    getAuthor,
    getAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor,
} = require("../controllers/authorController");

// GET todos los autores
router.get("/", getAuthors);
// GET un solo autor
router.get("/:id", getAuthor);
// POST un autor
router.post("/", createAuthor);
// DELETE un autor
router.delete("/:id", deleteAuthor);
// UPDATE un autor
router.patch("/:id", updateAuthor);

module.exports = router;
