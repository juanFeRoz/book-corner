const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const genreSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    img: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Genres", genreSchema);
