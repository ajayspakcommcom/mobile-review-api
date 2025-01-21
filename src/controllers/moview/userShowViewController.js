const UserShowView = require('../../models/moview/userShowView');

exports.getList = async(req, res) => {
    try {
        const listData = await UserShowView.find({});
        res.status(200).json({ status: 'success', results: listData.length, data: { listData } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: cannot user show view.' });
    }
};

exports.getDataById = async(req, res) => {
    try {
        const data = await UserShowView.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ status: 'fail', message: 'No user show view found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { data } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: cannot retrieve the user show view.' });
    }
};

exports.createData = async(req, res) => {
    try {
        const data = await UserShowView.create(req.body);
        res.status(201).json({ status: 'success', data: { data: data } });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: `${error} Server error: cannot create the user show view.` });
    }
};

exports.updateDataById = async(req, res) => {
    try {
        const data = await UserShowView.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return res.status(404).json({ status: 'fail', message: 'No user show view found with that ID' });
        }
        return res.status(200).json({ status: 'success', data: { data }, message: 'user show view deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot update the user show view.' });
    }
};

exports.deleteDataById = async(req, res) => {
    try {
        const data = await UserShowView.findOneAndUpdate({ _id: req.params.id }, { new: true });
        if (!data) {
            return res.status(404).json({ status: 'fail', message: 'No user show view found with that ID' });
        }
        return res.status(200).json({ status: 'success', data: null, message: 'user show view deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the user show view.' });
    }
};