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
    basePrice: {
        type: Number,
    },
    noOfFloors: {
        type: Number,
    },
    type: {
        type: String,
        enum: ['residential', 'commercial'],
        default: 'residential'
    },
    parkingSpaceArea: {
        type: Number,
    },
    totalAreaInSqFt: {
        type: Number,
    },
    ownerType: {
        type: String,
        enum: ['agency', 'person'],
        default: 'agency'
    }
});

module.exports = House = mongoose.model('house', houseSchema);