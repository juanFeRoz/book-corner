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
           
            required: true,
        },

        genre: [
            {
                type: Schema.Types.ObjectId,
                ref: "Genre",
            },
        ],

        download: {
            type: String,
            required: true,
        },

        portada: {
            type: String,
            required: true,

        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);
