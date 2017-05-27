import * as express from 'express';
import './database/SequelizeTables';
import {Middlewares} from './middleware/base';
const port = 3000;

export const app = express();

app.use(express.static('dist'));

app.use(Middlewares.Configuration);

export const Server = app.listen(port, () => {
    console.log(`server running ${port}`);
});

