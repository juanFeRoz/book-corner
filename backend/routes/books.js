const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");
const {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
} = require("../controllers/bookController");
// GET todos los libros
router.get("/", getBooks);
// GET un solo libro
router.get("/:id", getBook);
// POST un libro
router.post("/", createBook);

// DELETE un libro
router.delete("/:id", deleteBook);
// UPDATE un libro
router.patch("/:id", updateBook);

module.exports = router;
