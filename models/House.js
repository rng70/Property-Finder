// a complete mongoose schema for a house with the following non required fields owner, location, base price, no of floors, type which can be either residential of commercial, parking space area, total area in sq ft, owner type which is either agency or person, house media or images, and is availalbe which is either true or false

const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location'
    },
    price: {
        type: Number,
        required: true
    },
    noOfFloors: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['residential', 'commercial'],
        default: 'residential',
        required: true
    },
    parkingSpaceArea: {
        type: Number,
    },
    landArea: {
        type: Number,
        required: true
    },
    ownerType: {
        type: String,
        enum: ['agency', 'person'],
        default: 'agency'
    },
    isSold: {
        type: Boolean,
        default: false,
        required: true
    },
    image: {
        type: [
            String,
        ],
    },
    plot :{
        type : String
    },
    road : {
        type : String
    },
    block :{
        type : String
    },
    postCode : {
        type : String
    },
    areaName : {
        type : String
    },
    district : {
        type : String
    },
    division : {
        type : String
    }
});

module.exports = House = mongoose.model('house', houseSchema);