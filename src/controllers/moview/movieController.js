const Movie = require('../../models/moview/movieModel');

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json({ status: 'success', results: movies.length, data: { movies } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve movies.' });
    }
};

exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ status: 'fail', message: 'No movie found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { movie } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the movie.' });
    }
};

exports.createMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json({ status: 'success', data: { movie: newMovie } });
    } catch (error) {
        console.log('Error : ', error);
        return res.status(500).json({ status: 'error', message: 'Server error: Cannot create the movie.' });
    }
};

exports.updateMovieById = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!movie) {
            return res.status(404).json({ status: 'fail', message: 'No movie found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { movie } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot update the movie.' });
    }
};

exports.deleteMovieById = async (req, res) => {
    try {
        const movie = await Movie.findOneAndUpdate({ _id: req.params.id }, { $set: { is_deleted: true } }, { new: true });
        if (!movie) {
            return res.status(404).json({ status: 'fail', message: 'No movie found with that ID' });
        }
        res.status(204).json({ status: 'success', data: null, message: 'movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the movie.' });
    }
};
