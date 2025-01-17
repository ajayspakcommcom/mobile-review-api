const Show = require('../../models/moview/showModel');
const Movie = require('../../models/moview/movieModel');
const Review = require('../../models/moview/reviewModel.js');

// exports.getAllMoviesShows = async(req, res) => {
//     try {
//         const movies = await Movie.find({ is_deleted: false })
//             .sort({ _id: -1 });

//         const shows = await Show.find({ is_deleted: false })
//             .sort({ _id: -1 });

//         const latestMovies = movies.map(movie => ({
//             ...movie._doc,
//             isMovie: true
//         }));

//         const latestShows = shows.map(show => ({
//             ...show._doc,
//             isShow: true
//         }));

//         res.status(200).json({ status: 'success', data: [...latestMovies, ...latestShows], length: { count: latestMovies.length + latestShows.length } });
//     } catch (error) {
//         res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve Latest movies and shows.' });
//     }
// };

exports.getAllMoviesShows = async(req, res) => {
    try {
        // Aggregate movies with average ratings
        const moviesWithRatings = await Movie.aggregate([{
                $match: { is_deleted: false }
            },
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'movie',
                    as: 'reviews'
                }
            },
            {
                $addFields: {
                    averageRating: {
                        $avg: '$reviews.rating'
                    }
                }
            },
            {
                $sort: { averageRating: -1 }
            }
        ]);

        // Aggregate shows with average ratings
        const showsWithRatings = await Show.aggregate([{
                $match: { is_deleted: false }
            },
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'show',
                    as: 'reviews'
                }
            },
            {
                $addFields: {
                    averageRating: {
                        $avg: '$reviews.rating'
                    }
                }
            },
            {
                $sort: { averageRating: -1 }
            }
        ]);

        const latestMovies = moviesWithRatings.map(movie => ({
            ...movie,
            isMovie: true
        }));

        const latestShows = showsWithRatings.map(show => ({
            ...show,
            isShow: true
        }));

        res.status(200).json({
            status: 'success',
            data: [...latestMovies, ...latestShows],
            length: { count: latestMovies.length + latestShows.length }
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve latest movies and shows.' });
    }
};

exports.getAllMoviesShowsByKeyword = async(req, res) => {
    try {

        const { title, genre, release_date } = req.body;
        let movieFilter = { is_deleted: false };
        let showFilter = { is_deleted: false };

        if (title) {
            const regexTitle = new RegExp(title, 'i'); // 'i' for case-insensitive
            movieFilter.title = regexTitle;
            showFilter.title = regexTitle;
        }

        if (genre) {
            movieFilter.genre = genre;
            showFilter.genre = genre;
        }

        if (release_date) {
            movieFilter.release_date = release_date;
            showFilter.release_date = release_date;
        }

        if (movieFilter.title && showFilter.title) {
            const movies = await Movie.find(movieFilter).sort({ release_date: -1 });
            const shows = await Show.find(showFilter).sort({ release_date: -1 });
            const latestMovies = movies.map(movie => ({...movie._doc, isMovie: true }));
            const latestShows = shows.map(show => ({...show._doc, isShow: true }));
            res.status(200).json({ status: 'success', length: { count: latestMovies.length + latestShows.length }, data: [...latestMovies, ...latestShows], });
        } else {
            res.status(200).json({ status: 'Success', length: { count: 0 }, data: [] });
        }

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server error: Cannot retrieve movies and shows.'
        });
    }
};


exports.getAllMoviesShowsFiltered = async(req, res) => {
    try {

        const filteredArray = req.body.filterData // ["bengali", "english", "manish"];
        const movies = await Movie.find({ is_deleted: false, language: { $in: filteredArray.map(lang => new RegExp(`^${lang}$`, "i")) } }).sort({ release_date: -1 });
        const shows = await Show.find({ is_deleted: false, language: { $in: filteredArray.map(lang => new RegExp(`^${lang}$`, "i")) } }).sort({ release_date: -1 });
        const latestMovies = movies.map(movie => ({...movie._doc, isMovie: true }));
        const latestShows = shows.map(show => ({...show._doc, isShow: true }));

        res.status(200).json({ status: 'success', data: [...latestMovies, ...latestShows], length: { count: latestMovies.length + latestShows.length } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve Latest movies and shows.' });
    }
};


// exports.getShowById = async (req, res) => {
//     try {
//         const show = await Show.findById(req.params.id);
//         if (!show) {
//             return res.status(404).json({ status: 'fail', message: 'No show found with that ID' });
//         }
//         res.status(200).json({ status: 'success', data: { show } });
//     } catch (error) {
//         res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the show.' });
//     }
// };

// exports.createShow = async (req, res) => {
//     try {
//         const newShow = await Show.create(req.body);
//         res.status(201).json({ status: 'success', data: { show: newShow } });
//     } catch (error) {
//         console.log('Error : ', error);
//         return res.status(500).json({ status: 'error', message: 'Server error: Cannot create the show.' });
//     }
// };

// exports.updateShowById = async (req, res) => {
//     try {
//         const show = await Show.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//         if (!show) {
//             return res.status(404).json({ status: 'fail', message: 'No show found with that ID' });
//         }
//         res.status(200).json({ status: 'success', data: { show } });
//     } catch (error) {
//         res.status(500).json({ status: 'error', message: 'Server error: Cannot update the show.' });
//     }
// };

// exports.deleteShowById = async (req, res) => {
//     try {
//         const show = await Show.findOneAndUpdate({ _id: req.params.id }, { $set: { is_deleted: true } }, { new: true });
//         if (!show) {
//             return res.status(404).json({ status: 'fail', message: 'No show found with that ID' });
//         }
//         res.status(204).json({ status: 'success', data: null, message: 'show deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the show.' });
//     }
// };