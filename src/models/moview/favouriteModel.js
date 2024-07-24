const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Movie = require('./movieModel');
const User = require('./userModel');

const favoritesSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Favorites = mongoose.model.Favorites || mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites;
