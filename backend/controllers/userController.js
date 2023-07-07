// login user
const loginUser = async (req, res) => {
    res.json({ msg: "login user" });
};

// signup user
const signupUser = async (req, res) => {
    res.json({ msg: "signup user" });
};

// add favorite book
const addFavoriteUser = async (req, res) => {
    res.json({ msg: "added a user favorite book" });
};

module.exports = {
    loginUser,
    signupUser,
    addFavoriteUser,
};
