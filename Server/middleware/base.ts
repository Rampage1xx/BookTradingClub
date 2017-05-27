import * as bodyParser from 'body-parser';
import * as SequelizeStore from 'connect-session-sequelize';
import * as cors from 'cors';
import * as express from 'express';
import * as expressGraphQL from 'express-graphql';
import * as session from 'express-session';
import * as morgan from 'morgan';
import * as passport from 'passport';
import {bookTradingConnection} from '../database/SequelizeTables';
import {RootSchema} from '../GraphQL/RootGraphQL';

const sequelizeSessionCookie = SequelizeStore(session.Store);
const corsOptions = {
    credentials: true,
    optionsSuccessStatus: 200,
    origin: 'http://localhost:80',
    methods: ['GET', 'POST']
};

const sessionParameters = {
    secret: 'some secret',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 6000000},
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 24 * 60 * 60 * 30,
    store: new sequelizeSessionCookie({db: bookTradingConnection})

};

export class Middlewares {

    static  get Configuration() {
        const app = express();
        app.use(morgan('tiny'));
        app.use(session(sessionParameters));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(cors(corsOptions));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use('/graphql', expressGraphQL({
            schema: RootSchema,
            graphiql: true

        }));
        return app;
    }
}
