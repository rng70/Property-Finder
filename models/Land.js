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
    landImages: {
        type: [
            {
                data: Buffer,
                type: String,
            }
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
    }
}
);

module.exports = Land = mongoose.model('land', landSchema);