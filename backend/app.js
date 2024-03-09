import express from 'express';
import dotenv from 'dotenv';
import myOrder from './routes/myOrder.js';
import admin from './routes/admin.js';
// import cookieParser from 'cookie-parser';

const app = express();

dotenv.config({
    path: 'backend/data/.env',
});

//using middlewares 
//to take value from the body
app.use(express.json());

app.use('/api/v1', myOrder);
app.use('/api/v1', admin);

export default app;