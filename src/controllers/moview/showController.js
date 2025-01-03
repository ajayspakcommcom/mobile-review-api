
const Show = require('../../models/moview/showModel');

exports.getAllShows = async (req, res) => {
    try {
        // const shows = await Show.find({});
        const shows = await Show.find({}).sort({ _id: -1 }); // Sort by `_id` in descending order
        res.status(200).json({ status: 'success', results: shows.length, data: { shows } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve shows.' });
    }
};

exports.searchShows = async (req, res) => {
    const { keyword } = req.body;

    if (!keyword) {
        return res.status(400).json({ status: 'error', message: 'Please provide a search keyword.' });
    }

    try {
        // Use a case-insensitive regex to find movies with the keyword in title or description
        const shows = await Show.find({ $or: [{ title: { $regex: keyword, $options: 'i' } }] });
        res.status(200).json({ status: 'success', results: shows.length, data: { shows } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot search shows.' });
    }
};

exports.getShowById = async (req, res) => {
    try {
        const show = await Show.findById(req.params.id);
        if (!show) {
            return res.status(404).json({ status: 'fail', message: 'No show found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { show } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the show.' });
    }
};

exports.createShow = async (req, res) => {
    try {
        const newShow = await Show.create(req.body);
        res.status(201).json({ status: 'success', data: { show: newShow } });
    } catch (error) {
        console.log('Error : ', error);
        return res.status(500).json({ status: 'error', message: 'Server error: Cannot create the show.' });
    }
};

exports.updateShowById = async (req, res) => {
    try {
        const show = await Show.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!show) {
            return res.status(404).json({ status: 'fail', message: 'No show found with that ID' });
        }        
        return res.status(200).json({ status: 'success', data: { show }, message: 'show deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot update the show.' });
    }
};

exports.deleteShowById = async (req, res) => {
    try {
        const show = await Show.findOneAndUpdate({ _id: req.params.id }, { $set: { is_deleted: true } }, { new: true });
        if (!show) {
            return res.status(404).json({ status: 'fail', message: 'No show found with that ID' });
        }
        return res.status(200).json({ status: 'success', data: null, message: 'show deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the show.' });
    }
};
