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
    .connect(
        "mongodb+srv://juanfeliperojas010:D0UJkVLxj6thIlyu@book-corner-database.anegrmf.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        // escuchar requests
        app.listen(4000, () => {
            console.log(
                `conectado a la base de datos y escuchando en el puerto 4000`
            );
        });
    })
    .catch((error) => {
        console.error(error);
    });
