const express = require("express");
const router = express.Router();
const {
    loginUser,
    signupUser,
    addFavoriteUser,
} = require("../controllers/userController");
const User = require("../models/userModel");
// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// add favorite route
router.patch("/:id", addFavoriteUser);

module.exports = router;
