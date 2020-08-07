import express from 'express';
import CLassessController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classescontrollers = new CLassessController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classescontrollers.index);
routes.post('/classes', classescontrollers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
