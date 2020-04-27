const express = require('express');
const multer  = require('multer');

const PlanetController = require('./controllers/PlanetController');

routes = express.Router();

routes.post('/create', PlanetController.createPlanet);
routes.get('/find', PlanetController.findPlanet);
routes.get('/find_all', PlanetController.findAllPlanet);
routes.put('/update', PlanetController.updatePlanet);
routes.delete('/remove', PlanetController.removePlanet);

const routes = express.Router();