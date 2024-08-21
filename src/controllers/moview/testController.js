const Test = require('../../models/moview/testModel');

exports.getAllTest = async (req, res) => {

    try {
        const users = await Test.find({ firstname: "Jane" });
        res.status(200).json({ status: 'success', data: users, error: null, msg: null });
    } catch (error) {
        res.status(500).json({ status: 'error', data: null, error: `error ${error}`, message: 'Server error: Cannot retrieve users.' });
    }
};

exports.getTestById = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        if (!test) {
            return res.status(404).json({ status: 'fail', message: 'No user found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { test } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the test.' });
    }
};

exports.createTest = async (req, res) => {

    try {

        const newTest = await Test.create({
            firstname: req.body.firstname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        });

        res.status(201).json({ status: 'success', data: { test: newTest } });
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

exports.updateTestById = async (req, res) => {
    try {

        const userData = await Test.findById(req.params.id);

        const isOldPassword = userData.password_hash === req.body.password;

        if (isOldPassword) {
            req.body.password_hash = req.body.password;
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password_hash = hashedPassword;
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
        res.status(500).json({ status: 'error', message: `Server error: Cannot update the user. ${error}` });
    }
};

exports.deleteTestById = async (req, res) => {
    try {
        const user = await Test.findOneAndUpdate({ _id: req.params.id }, { $set: { is_deleted: true } }, { new: true });
        if (!user) {
            return res.status(404).json({ status: 'fail', message: 'No user found with that ID' });
        }
        res.status(204).json({ status: 'success', data: null, message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the user.' });
    }
};


