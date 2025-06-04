const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scatch")
.then(() => {
    console.log("Database connected successfully");    
})
.catch((err) => {
    console.error("Database connection error:", err);
});

module.exports = mongoose.connection; // Export the mongoose connection for use in other files
// This allows you to use the mongoose connection in other parts of your application