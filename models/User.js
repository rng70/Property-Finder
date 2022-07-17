const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    dob: {
        type: Date,
        default: Date.now
    },
    phone: {
        type: String,
        required: true
    },
    nid: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        type: String,
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location'
    },
});

module.exports = User = mongoose.model('user', userSchema);