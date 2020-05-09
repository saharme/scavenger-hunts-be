import express from 'express';
import {modulesRouter} from '../modules';

function expressWebServer() {
    // Creating an ExpressJS app instance
    const app = express();
    app.use('/', modulesRouter);
    return app;
}

module.exports = expressWebServer