const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

const ongController = require('./controllers/OngController.js');
const incidentsController = require('./controllers/IncidentController.js');
const profileController = require('./controllers/ProfileController');
const sessionsController = require('./controllers/SessionsController');

routes.get('/ongs', ongController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ongController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), incidentsController.index);

routes.post('/incidents', celebrate(
    {
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required()
        }),
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown()
    }), incidentsController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentsController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profileController.index);

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}), sessionsController.create);

module.exports = routes;