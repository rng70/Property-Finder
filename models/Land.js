// a mongoose schema with fields: owner, location, ownerType which is only one of the following: agency or persons, landArea in sq feet, land images, price and isSold which is only one of the following: true or false

const mongoose = require('mongoose');

const landSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location'
    },
    ownerType: {
        type: String,
        enum: ['agency', 'person'],
        required: true
    },
    landArea: {
        type: Number,
        required: true
    },
    image: {
        type: [
            String,
        ],
    },
    price: {
        type: Number,
        required: true
    },
    isSold: {
        type: Boolean,
        default: false,
        required: true
    },
    landDetails: {
        type: String,
        required: false
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
    },
    contactNo:{
        type : String
    }
}
);

module.exports = Land = mongoose.model('land', landSchema);