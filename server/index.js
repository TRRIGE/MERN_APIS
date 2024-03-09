import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import bodyParser from 'body-parser'
import Connection from './database/db.js';
import Routes from './routes/route.js'

const app = express()

dotenv.config();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

app.use('/', Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(8000, () => { console.log('Server is listening on 8000') })