const express = require('express');

const PlanetController = require('./controllers/PlanetController');

const routes = express.Router();

routes.post('/create', PlanetController.createPlanet);
routes.get('/find/:id', PlanetController.findPlanet);
routes.get('/find_all', PlanetController.findAllPlanet);
routes.put('/update/:id', PlanetController.updatePlanet);
routes.delete('/remove/:id', PlanetController.removePlanet);

module.exports = routes;