const express = require('express');
const router = express.Router();

//查询所有的电影类别
router.get('/genre', function(req, res) {
    req.models.Genre.find({}, function (err, genres) {
        if (err) throw err;
        res.json(genres)
    });
});

//查询所有电影信息
router.get('/movies', function(req, res) {
    req.models.Movies.find({}, function (err, movies) {
        if (err) throw err;
        res.json(movies)
    });
});
//根据类别查询所有电影
router.get('/movies/genre/:genre', function(req, res) {
    req.models.Movies.find({}, function (err, movies) {
        if (err) throw err;
        res.json(movies)
    });
});

//根据名字查询电影
router.get('/movies/name/:name', function(req, res) {
    req.models.Movies.find({}, function (err, movies) {
        if (err) throw err;
        res.json(movies)
    });
});


module.exports = router;
