
const SupportContact  = require('../../models/moview/supportContactModel');

exports.getAllSupportContacts = async (req, res) => {
    try {
        const supportContacts = await SupportContact.find({});
        res.status(200).json({ status: 'success', results: supportContacts.length, data: { supportContacts } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve Support Contact.' });
    }
};

exports.getSupportContactById = async (req, res) => {
    console.log('Ram...');
    try {
        const supportContact = await SupportContact.findById(req.params.id);        
        if (!supportContact) {
            return res.status(404).json({ status: 'fail', message: 'No Support Contact found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { supportContact } });
    } catch (error) {                
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the Support Contact.' });
    }
};



exports.createSupportContact = async (req, res) => {

    try {
        const newSupportContact = await SupportContact.create({
            name: req.body.name, 
            mobile_no:req.body.mobile_no, 
            email:req.body.email, 
            message:req.body.message        
        });

        res.status(201).json({ status: 'success', data: { data: newSupportContact } });
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

exports.updateSupportContactById = async (req, res) => {
    try {
        const supportContact = await SupportContact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!supportContact) {
            return res.status(404).json({ status: 'fail', message: 'No Support Contact found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { supportContact } });
    } catch (error) {                
        res.status(500).json({ status: 'error', message: 'Server error: Cannot update the Support Contact.' });
    }
};

exports.deleteSupportContactById = async (req, res) => {
    try {
        const supportContact = await SupportContact.findOneAndUpdate({ _id: req.params.id }, { $set: { is_deleted: true, seen: true } }, { new: true });
        if (!supportContact) {
            return res.status(404).json({ status: 'fail', message: 'No Support Contact found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { _id: supportContact._id }, message: 'Support Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the Support Contact.' });
    }
};
