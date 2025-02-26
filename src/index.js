import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';

dotenv.config({
    path: './env',
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`🚀 Server is running on port ${process.env.PORT} 🚀`);
        });
    })
    .catch((err) => {
        console.error('Connection failed: ', err);
    });
/*
import express from 'express';
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('Error', (error) => {
            console.error('Express error - ', error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Database connection error - ', error);
        throw error;
    }
})();
*/
