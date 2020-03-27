const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/OngController.js');
const incidentsController = require('./controllers/IncidentController.js');
const profileController = require('./controllers/ProfileController');
const sessionsController = require('./controllers/SessionsController');

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

routes.post('/sessions', sessionsController.create);

module.exports = routes;