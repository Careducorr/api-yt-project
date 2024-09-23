import express from 'express';
import { pool } from './mysql';
import { v4 as uuidv4 } from 'uuid';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { userRoutes } from '../routes/user.routes';
import { videosRoutes } from '../routes/videos.routes';
import { config } from 'dotenv';

config();

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/videos', videosRoutes);

app.listen(4000);