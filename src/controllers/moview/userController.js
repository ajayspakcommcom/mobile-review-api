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
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ status: 'fail', message: 'No user found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { user } });
    } catch (error) {
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


exports.addFollower = async (req, res) => {
    const { userId, followerId } = req.body;

    if (!userId || !followerId) {
        return res.status(400).json({ error: 'User ID and Follower ID are required' });
    }

    try {
        // Retrieve the user documents
        const user = await User.findById(userId);
        const follower = await User.findById(followerId);

        if (!user || !follower) {
            return res.status(404).json({ error: 'User or Follower not found' });
        }

        // Check if the follower is already in the user's followers array
        if (user.followers.includes(followerId)) {
            return res.status(400).json({ error: 'User is already followed' });
        }

        // Check if the user is already in the follower's following array
        if (follower.following.includes(userId)) {
            return res.status(400).json({ error: 'Follower is already following the user' });
        }

        // Add followerId to the user's followers array
        user.followers.push(followerId);
        await user.save();

        // Add userId to the follower's following array
        follower.following.push(userId);
        await follower.save();

        return res.status(200).json({ status: 'success', message: 'Follower added successfully' });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.removeFollower = async (req, res) => {
    const { userId, followerId } = req.body;

    if (!userId || !followerId) {
        return res.status(400).json({ error: 'User ID and Follower ID are required' });
    }

    try {
        // Retrieve the user documents
        const user = await User.findById(userId);
        const follower = await User.findById(followerId);

        if (!user || !follower) {
            return res.status(404).json({ error: 'User or Follower not found' });
        }

        // Check if the follower is in the user's followers array
        if (!user.followers.includes(followerId)) {
            return res.status(400).json({ error: 'User is not followed by this follower' });
        }

        // Check if the user is in the follower's following array
        if (!follower.following.includes(userId)) {
            return res.status(400).json({ error: 'Follower is not following the user' });
        }

        // Remove followerId from the user's followers array
        await User.findByIdAndUpdate(userId, { $pull: { followers: followerId } });
        // Remove userId from the follower's following array
        await User.findByIdAndUpdate(followerId, { $pull: { following: userId } });

        return res.status(200).json({ status: 'success', message: 'Follower removed successfully' });
    } catch (error) {
        console.error('Error removing follower:', error);
        return res.status(500).json({ status: 'error', message: error.message });
    }
};
