import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import cookieParser from 'cookie-parser';
dotenv.config();
import cors from "cors"

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB()
});