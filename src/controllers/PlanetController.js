const Planet = require('../models/Planet');

module.exports = {
    async createPlanet(req, res){
        const {name, distanceSun, daysAroundSun, weight} = req.body;
        const planet = await Planet.create({
            name,
            distanceSun,
            daysAroundSun,
            weight,
        });

        return res.json(planet);
    },

    async findPlanet(req, res){
        const {id} = req.body;
        const planet = await Planet.findById(id);
        return res.json(planet);
    },

    async findAllPlanet(req, res){
        const {id} = req.body;
        const planet = await Planet.find(id);
        return res.json(planet);
    },

    async updatePlanet(req, res){
        const {id} = req.body;

        const Planet = await Planet.findOneAndUpdate(
            {id}, 
            {...req.body}, 
            {new: true},
        )

        return res.json(Planet);
    },

    async removePlanet(req, res){
        const {id} = req.params;

        await Planet.findByIdAndDelete(id);
        
        return res.json({'removed': true});
    },
}