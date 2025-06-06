const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Owners list');
});

// console.log(process.env.NODE_ENV);

module.exports = router;