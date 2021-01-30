import express from 'express';

import cors  from 'cors';

import Routes from './routes/index';

import './database';

const app = express();

app.use(cors());

app.use(express.json());

app.use(Routes);

app.listen(3333);