import express from 'express';
import {modulesRouter} from '../modules';

function expressWebServer() {
    // Creating an ExpressJS app instance
    const app = express();
    app.use('/', modulesRouter);
    console.log('public: ' + __dirname + '/public')
    app.use(express.static(__dirname + '/public'));
    return app;
}

module.exports = expressWebServer