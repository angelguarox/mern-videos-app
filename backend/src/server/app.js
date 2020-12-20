import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import variable from '../config/variables';
import videoRoutes from '../module/video.routes';

const app = express();

app.set('port', variable.server.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(videoRoutes);

export default app;