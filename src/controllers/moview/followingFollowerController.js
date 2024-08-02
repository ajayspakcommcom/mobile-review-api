const Following = require('../../models/moview/followingModel');
const User = require('../../models/moview/userModel');
const Follower = require('../../models/moview/followerModel');



exports.addFollower = async (req, res) => {
    const { userId, followerId } = req.body;

    if (!userId || !followerId) {
        return res.status(400).json({ error: 'User ID and Follower ID are required' });
    }

    try {
        // Check if the user and follower exist
        const user = await User.findById(userId);
        const follower = await User.findById(followerId);

        if (!user || !follower) {
            return res.status(404).json({ error: 'User or Follower not found' });
        }

        // Check if the follower relationship already exists
        const existingFollower = await Follower.findOne({ userId, followerId });
        const existingFollowing = await Following.findOne({ userId: followerId, followingId: userId });

        if (existingFollower || existingFollowing) {
            return res.status(400).json({ error: 'User is already followed by this follower' });
        }

        // Add follower relationship
        const newFollower = new Follower({ userId, followerId });
        await newFollower.save();

        // Add following relationship
        const newFollowing = new Following({ userId: followerId, followingId: userId });
        await newFollowing.save();

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
        // Check if the user and follower exist
        const user = await User.findById(userId);
        const follower = await User.findById(followerId);

        if (!user || !follower) {
            return res.status(404).json({ error: 'User or Follower not found' });
        }

        // Check if the follower relationship exists
        const followerRelation = await Follower.findOne({ userId, followerId });
        const followingRelation = await Following.findOne({ userId: followerId, followingId: userId });

        if (!followerRelation || !followingRelation) {
            return res.status(400).json({ error: 'Follower relationship does not exist' });
        }

        // Remove the follower relationship
        await Follower.deleteOne({ userId, followerId });

        // Remove the following relationship
        await Following.deleteOne({ userId: followerId, followingId: userId });

        return res.status(200).json({ status: 'success', message: 'Follower removed successfully' });
    } catch (error) {
        console.error('Error removing follower:', error);
        return res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.checkIfFollowing = async (req, res) => {
    const { userId, followerId } = req.body;

    if (!userId || !followerId) {
        return res.status(400).json({ error: 'User ID and Follower ID are required' });
    }

    try {
        // Check if the user and follower exist
        const user = await User.findById(userId);
        const follower = await User.findById(followerId);

        if (!user || !follower) {
            return res.status(404).json({ error: 'User or Follower not found' });
        }

        // Check if the follower relationship already exists
        const followerRelation = await Follower.findOne({ userId, followerId });
        const followingRelation = await Following.findOne({ userId: followerId, followingId: userId });

        if (followerRelation && followingRelation) {
            return res.status(200).json({ status: 'success', message: 'User is already following', isFollowing: 1 });
        } else {
            return res.status(200).json({ status: 'success', message: 'User is not following', isFollowing: 0 });
        }
    } catch (error) {
        console.error('Error checking if following:', error);
        return res.status(500).json({ status: 'error', message: error.message });
    }
};

