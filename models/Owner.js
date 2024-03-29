// a mongoose schema with required fields: contact no, first name, nid number and additional fields: no of houses sold, no of rented properties, rating, email, last name, image, date of birth

const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    nid: {
        type: String,
        required: true
    },
    noOfHousesSold: {
        type: Number,
        default: 0
    },
    noOfRentedProperties: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    email: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    avatar: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type : String
    }
});

module.exports = Owner = mongoose.model('owner', ownerSchema);