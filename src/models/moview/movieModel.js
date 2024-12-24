const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    cast: [{
        actor: { type: String, required: true },
        role: { type: String, required: true }
    }],
    poster_url: {
        type: String,
        required: true
    },
    test_poster_url: {
        type: String
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    language: {
        type: String        
    }
});

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);
module.exports = Movie;
