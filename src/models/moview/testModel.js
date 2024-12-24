const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
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
    is_deleted: {
        type: Boolean,
        default: false
    }
});

const Test = mongoose.models.Test || mongoose.model('Test', testSchema);

module.exports = Test;


