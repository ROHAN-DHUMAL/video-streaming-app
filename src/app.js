import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// cors origin setup
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }),
);

// body parser setup its accepts json and form data
app.use(express.json({ limit: '10mb' }));

// it use to accept data from params
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// set static folder to save images
app.use(express.static('public'));

// to set cookies
app.use(cookieParser());

export default app;
