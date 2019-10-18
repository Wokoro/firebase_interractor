import express from 'express';
import { applyMiddlewares, applyRoutes } from './utils';
import middlewares from './middlewares';
import errorHandlers from './middlewares/errorHandlers';
import routes from './components';

const app = express();

process.on("uncaughtException", ( error )=> console.log(error));
process.on("unhandledRejection", ( error )=> console.log(error));

applyMiddlewares(middlewares, app);
applyRoutes(routes, app);
applyMiddlewares(errorHandlers, app);

export default app;