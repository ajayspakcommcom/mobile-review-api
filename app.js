const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./src/config');
const app = express();
connectDB();


const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors(corsOptions));

const authRoute = require('./src/routes/moview/authRoute');
const authMiddleware = require('./src/middlewares/moview/authMiddleware');

const userRoutes = require('./src/routes/moview/userRoute');
const movieRoute = require('./src/routes/moview/movieRoute');
const notificationRoute = require('./src/routes/moview/notificationRoute');
const reviewRoute = require('./src/routes/moview/reviewRoute');
const followingFollowerRoute = require('./src/routes/moview/followingFollowerRoute');


app.use('/api', authRoute);
app.use('/api', userRoutes);
app.use('/api', authMiddleware.verifyToken, movieRoute);
app.use('/api', authMiddleware.verifyToken, notificationRoute);
app.use('/api', authMiddleware.verifyToken, reviewRoute);
app.use('/api', authMiddleware.verifyToken, followingFollowerRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
