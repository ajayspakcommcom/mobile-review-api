const bcrypt = require('bcrypt');
const User = require('../../models/moview/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ status: 'success', results: users.length, data: { users } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve users.' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ status: 'fail', message: 'No user found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { user } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the user.' });
    }
};

exports.createUser = async (req, res) => {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({
            firstname: req.body.firstname,
            username: req.body.username,
            email: req.body.email,
            password_hash: hashedPassword,
            phone: req.body.phone
        });

        res.status(201).json({ status: 'success', data: { user: newUser } });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ status: 'error', message: errors });
        } else if (error.code === 11000) {
            return res.status(400).json({ status: 'error', message: 'User name or email already exists.' });
        } else {
            console.log('Error : ', error);
            return res.status(500).json({ status: 'error', message: 'Server error: Cannot create the user.' });
        }
    }
};

exports.updateUserById = async (req, res) => {

    try {
        // If password is provided in the request body, hash it
        if (req.body.password) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashedPassword;
            req.body.password_hash = req.body.password
        }

        // Find and update the user by ID
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        // Handle case where user is not found
        if (!user) {
            return res.status(404).json({ status: 'fail', message: 'No user found with that ID' });
        }

        // Respond with updated user data
        res.status(200).json({ status: 'success', data: { user } });
    } catch (error) {
        // Handle server errors
        res.status(500).json({ status: 'error', message: 'Server error: Cannot update the user.' });
    }

};

exports.deleteUserById = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: { is_deleted: true } }, { new: true });
        if (!user) {
            return res.status(404).json({ status: 'fail', message: 'No user found with that ID' });
        }
        res.status(204).json({ status: 'success', data: null, message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the user.' });
    }
};


