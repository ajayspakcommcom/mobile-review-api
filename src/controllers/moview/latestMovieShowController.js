
const Show = require('../../models/moview/showModel');
const Movie = require('../../models/moview/movieModel');

exports.getAllMoviesShows = async (req, res) => {
    try {
        const movies = await Movie.find({ is_deleted: false })
            .sort({ release_date: -1 });

        const shows = await Show.find({ is_deleted: false })
            .sort({ release_date: -1 });

        const latestMovies = movies.map(movie => ({
            ...movie._doc,
            isMovie: true
        }));

        const latestShows = shows.map(show => ({
            ...show._doc,
            isShow: true
        }));

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
