const mogoose = require("mongoose");

const Schema = mogoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    favoriteBooks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Book",
        },
    ],
});

module.exports = mogoose.model("User", userSchema);
