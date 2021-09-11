import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import colorsRoute from './routes/colorsRoute.js';

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());




const PORT = process.env.PORT || 5000;

// connect to mongoose
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => app.listen(PORT, () => console.log(`express server is listening on ${PORT}`)))
   .catch((error) => console.log(error.message));

// route
app.use("/", colorsRoute)