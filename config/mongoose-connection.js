const mongoose = require('mongoose');
const config = require('config');
const debuger = require('debug')('development:mongoose');

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(() => {
    debuger("Database connected successfully");    
})
.catch((err) => {
   debuger("Database connection error:", err);
});

module.exports = mongoose.connection; 