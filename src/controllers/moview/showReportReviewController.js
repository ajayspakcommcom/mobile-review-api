const ShowReportReview = require('../../models/moview/showReportReviewModel');

exports.getAllShowReportReviews = async(req, res) => {
    try {
        const listData = await ShowReportReview.find({});
        res.status(200).json({ status: 'success', results: listData.length, data: { listData } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve Show Reports...' });
    }
};

exports.getShowReportReviewById = async(req, res) => {
    try {
        const data = await ShowReportReview.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ status: 'fail', message: 'No Show Report Review found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { data } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the Show Report Review.' });
    }
};

exports.createShowReportReview = async(req, res) => {
    try {
        const newData = await ShowReportReview.create(req.body);
        res.status(201).json({ status: 'success', data: { newData: newData } });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Server error: Cannot create the Show Report Review.' });
    }
};

exports.updateShowReportReviewById = async(req, res) => {
    try {
        const data = await ShowReportReview.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return res.status(404).json({ status: 'fail', message: 'No Show Report Review found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { data } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot update the Show Report Review.' });
    }
};

exports.deleteShowReportReviewById = async(req, res) => {
    try {
        const data = await ShowReportReview.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ status: 'fail', message: 'No Show Report Review found with that ID' });
        }
        res.status(200).json({ status: 'success', data: null, message: 'Show Report Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the Show Report Review.' });
    }
};