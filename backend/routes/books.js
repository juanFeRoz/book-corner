const express = require("express");
const router = express.Router();
const {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
} = require("../controllers/bookController");
const requireAuth = require("../middleware/requireAuth");

// GET todos los libros
router.get("/", getBooks);

// GET un solo libro
router.get("/:id", getBook);

// POST un libro
router.post("/", createBook);

// DELETE un libro
router.delete("/:id", deleteBook);

// require authorization for updating books
router.use(requireAuth);

// UPDATE un libro
router.patch("/:id", updateBook);

module.exports = router;
