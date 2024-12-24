require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    // Get token from header
    const token = req.headers['authorization']?.split(' ')[1];
    // Check if token does not exist
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach user to request object
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
