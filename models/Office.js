// a mongoose schema with fields: isHead,  yearOpened, contactNo, email, address
const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema({
    isHead: {
        type: Boolean,
    },
    yearOpened: {
        type: Date,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'location'
    }
});

module.exports = Office = mongoose.model('office', officeSchema);