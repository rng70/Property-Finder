// a mongoose schema for space with the following non required fields house, location, price, sell type which can be either rent or sale, type which can be either residential or commercial space, area in sq ft, no of rooms, no of kitchens, no of washrooms, no of dining rooms, no of living rooms, no of servent rooms, apartment no, no of floors, has lift, has sequrity guard, no of balcony, parking space, media or images, and is availalbe which is either true or false and space details and floor number where the space is located

const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema({
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'house'
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location'
    },
    price: {
        type: Number,
        required: true
    },
    sellType: {
        type: String,
        enum: ['rent', 'sell'],
        default: 'rent',
        required: true
    },
    type: {
        type: String,
        enum: ['residential', 'commercial'],
        default: 'residential',
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    noOfRooms: {
        type: Number,
        required: true
    },
    noOfKitchens: {
        type: Number,
    },
    noOfWashrooms: {
        type: Number,
    },
    noOfDiningRooms: {
        type: Number,
    },
    noOfLivingRooms: {
        type: Number,
    },
    noOfServentRooms: {
        type: Number,
    },
    apartmentNo: {
        type: Number
    },
    noOfFloors: {
        type: Number,
    },
    hasLift: {
        type: Boolean,
        default: false
    },
    hasSecurityGuard: {
        type: Boolean,
        default: false
    },
    noOfBalcony: {
        type: Number,
    },
    parkingSpace: {
        type: Boolean,
    },
    image: {
        type: [
            String,
        ],
    },
    isAvailable: {
        type: Boolean,
        default: true,
        required: true
    },
    spaceDetails: {
        type: String,
    },
    whichFloors: {
        type: Number,
        required: true
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

module.exports = Space = mongoose.model('space', spaceSchema);