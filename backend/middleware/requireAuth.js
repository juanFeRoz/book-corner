const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
    // verify authentication
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }

    const token = authorization.split(" ")[1];

    // verify the token with the jwt "secret"
    try {
        const { _id } = jwt.verify(token, "xv4L4i96DNjrgq");
        res.user = await User.findOne({ _id });
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Request is not authorized" });
    }
};

module.exports = requireAuth;
