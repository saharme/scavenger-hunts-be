import express from 'express';
import {serviceRouter} from './service/routes/service.routes';

const modulesRouter = express.Router();

modulesRouter.use('/service', serviceRouter);

export {
 modulesRouter
};