const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,    
        minlength: 3,
        maxlength: 10,
        trim: true,
    },
    email: String,
    password: String,    
    cart : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    }],
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
});

module.exports = mongoose.model('User', userSchema);