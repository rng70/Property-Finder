const mongoose = require('mongoose');

const agencySchema = new mongoose.Schema({
    tradeLicenseNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ratring: {
        type: Number,
        default: 0
    },
    noOfSoldHouses: {
        type: Number,
        default: 0
    },
    noOfBranchs: {
        type: Number,
        default: 0
    },
    yearOfEstablishment: {
        type: Date,
        required: true,
        default: Date.now
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location'
    },
    images: {
        type: [
            {
                data: Buffer,
                type: String,
                required: false
            }
        ],
        required: false
    }
});

module.exports = Agency = mongoose.model('agency', agencySchema);

