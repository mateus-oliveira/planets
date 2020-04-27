const { Schema, model } = require('mongoose');

const PlanetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    distanceSun: {
        type: Number,
        required: true,
    },
    daysAroundSun: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
});

module.exports = model('Planet', PlanetSchema);