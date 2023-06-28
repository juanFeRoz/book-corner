require("dotenv").config();

const express = require("express");
const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");
const genreRoutes = require("./routes/genres");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// rutas
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/genres", genreRoutes);

// conectarse a mongodb
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // escuchar requests
        app.listen(process.env.PORT, () => {
            console.log(
                `conectado a la base de datos y escuchando en el port ${process.env.PORT}`
            );
        });
    })
    .catch((error) => {
        console.error(error);
    });
