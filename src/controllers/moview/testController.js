const Test = require('../../models/moview/testModel');

exports.getAllTest = async (req, res) => {

    try {
        const tests = await Test.find({});
        res.status(200).json({ status: 'success', data: tests, error: null, msg: null });
    } catch (error) {
        res.status(500).json({ status: 'error', data: null, error: `error ${error}`, message: 'Server error: Cannot retrieve test.' });
    }
};

exports.getTestById = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        if (!test) {
            return res.status(404).json({ message: 'Test not found' });
        }
        res.status(200).json(profile);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Test', error: err });
    }
};

exports.createTest = async (req, res) => {

    try {
        const newTest = new Test(req.body);
        const savedTest = await newTest.save();
        res.status(201).json(savedTest);
    } catch (err) {
        res.status(400).json({ message: 'Error creating test', error: err });
    }
};

exports.updateTestById = async (req, res) => {
    try {
        const test = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!test) {
            return res.status(404).json({ message: 'Test not found' });
        }
        res.status(200).json(test);
    } catch (err) {
        res.status(400).json({ message: 'Error updating test', error: err });
    }
};

exports.deleteTestById = async (req, res) => {
    try {
        const deletedTest = await Test.findByIdAndDelete(req.params.id);
        if (!deletedTest) {
            return res.status(404).json({ message: 'Test not found' });
        }
        res.status(200).json({ message: 'Test deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting test', error: err });
    }
};


