const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        summary: {
            type: String,
            required: true,
        },

        author: {
            
            type: String,
            required: true,
        },

        genre: {
            type: String,
            required: true,
        },

        download: {
            type: String,
            required: true,
        },
<<<<<<< HEAD
        favorite: {
            type: Boolean,
            required: false,
        },
=======

        portada: {
            type: String,
            required: true,

        },

>>>>>>> origin/valentina
    },
    { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);
