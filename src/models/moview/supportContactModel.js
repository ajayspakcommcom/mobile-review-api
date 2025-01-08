const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supportContactSchema = new Schema({    
    name: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: Date.now
    },
});



const SupportContact = mongoose.model.SupportContact || mongoose.model('SupportContact', supportContactSchema);
module.exports = SupportContact;
