const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    plotNo: {
        type: String,
    },
    houseNo: {
        type: String,
    },
    roadNo: {
        type: String,
        required: true
    },
    blockNo: {
        type: String,
    },
    area: {
        type: String,
        required: true
    },
    postCode: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    state: {
        tyep: String,
    },
    country: {
        type: String,
        required: true
    }
});

module.export = Location = mongoose.model('location', locationSchema);