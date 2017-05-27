import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as morgan from 'morgan';
import * as passport from 'passport';

const corsOptions: object = {
    credentials: true,
    optionsSuccessStatus: 200,
    origin: 'http://localhost:80',
    methods: ['GET', 'POST']
};

export class Middlewares {

    static  get Configuration() {
        const app: express.Application = express();
        app.use(morgan('tiny'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(cors(corsOptions));
        app.use(passport.initialize());
        app.use(passport.session());

        return app;
    }
}
