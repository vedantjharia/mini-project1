const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 10,
        trim: true,
    },
    email: String,
    password: String,
    product: {
        type: Array,
        default: []
    },
    picture: String,
    gstin:String,
});

module.exports = mongoose.model('owner', ownerSchema);