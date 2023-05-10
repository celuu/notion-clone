const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET_OR_KEY);
}

// user existence check

const findUser = async (req, res) => {
    const { email } = req.body;
    try {
        const exists = await User.findOne({ email });
        if (exists) {
            res.status(200).json({ email });
        } else {
            res.status(400).json({ error: error.message });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// login user

const loginUser = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// signup user

const signupUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id)
        res.status(200).json({ user, token })
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = { findUser, loginUser, signupUser }