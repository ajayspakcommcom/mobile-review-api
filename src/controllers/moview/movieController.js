const Movie = require('../../models/moview/movieModel');

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json({ status: 'success', results: movies.length, data: { movies } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve movies.' });
    }
};

exports.searchMovies = async (req, res) => {
    const { keyword } = req.body;

    if (!keyword) {
        return res.status(400).json({ status: 'error', message: 'Please provide a search keyword.' });
    }

    try {
        // Use a case-insensitive regex to find movies with the keyword in title or description
        const movies = await Movie.find({ $or: [{ title: { $regex: keyword, $options: 'i' } }] });
        res.status(200).json({ status: 'success', results: movies.length, data: { movies } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot search movies.' });
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
        return res.status(500).json({ status: 'error', message: `${error} Server error: Cannot create the movie.` });
    }
};

exports.updateMovieById = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!movie) {
            return res.status(404).json({ status: 'fail', message: 'No movie found with that ID' });
        }
        return res.status(200).json({ status: 'success', data: { movie }, message: 'movie deleted successfully' });
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
        return res.status(200).json({ status: 'success', data: null, message: 'movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the movie.' });
    }
};
