const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/a', function(req, res) {
    res.json({name:1})
});

module.exports = router;
