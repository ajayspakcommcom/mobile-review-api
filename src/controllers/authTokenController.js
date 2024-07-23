const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.loginUser = async (req, res) => {

    const { username, email, password } = req.body;

    try {
        const user = await User.findOne({
            $or: [{ email: email }, { username: username }]
        });

        if (!user) {
            return res.status(401).json({ status: 'error', message: 'Invalid credentials.' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password_hash);

        if (!isValidPassword) {
            return res.status(401).json({ status: 'error', message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ status: 'success', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Server error: Cannot authenticate user.' });
    }
};

