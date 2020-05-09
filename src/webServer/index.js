import express from 'express';
import {modulesRouter} from '../modules';
const path = require('path');

function expressWebServer() {
    // Creating an ExpressJS app instance
    const app = express();
    app.use(express.static(path.resolve('public')));
    app.use('/', modulesRouter);

    return app;
}

module.exports = expressWebServer