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

const authRoute = require('./src/routes/authRoute');
const authMiddleware = require('./src/middlewares/authMiddleware');


const userRoutes = require('./src/routes/userRoute');
const movieRoute = require('./src/routes/movieRoute');
const notificationRoute = require('./src/routes/notificationRoute');
const reviewRoute = require('./src/routes/reviewRoute');




app.use('/api', authRoute);
app.use('/api', authMiddleware.verifyToken, userRoutes);
app.use('/api', authMiddleware.verifyToken, movieRoute);
app.use('/api', authMiddleware.verifyToken, notificationRoute);
app.use('/api', authMiddleware.verifyToken, reviewRoute);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
