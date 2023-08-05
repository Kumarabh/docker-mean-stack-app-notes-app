import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import noteRoutes from './routes/note.route.js';
import connectDB from './config/db.js';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();
dotenv.config({path: './config/.env'});

// DB CONNECTION
connectDB();

// MIDDLE WARES
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/notes', noteRoutes);


app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));