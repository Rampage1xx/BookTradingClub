"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const corsOptions = {
    credentials: true,
    optionsSuccessStatus: 200,
    origin: 'http://localhost:80',
    methods: ['GET', 'POST']
};
class Middlewares {
    static get Configuration() {
        const app = express();
        app.use(morgan('tiny'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cors(corsOptions));
        app.use(passport.initialize());
        app.use(passport.session());
        return app;
    }
}
exports.Middlewares = Middlewares;
//# sourceMappingURL=base.js.map