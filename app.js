
"use strict"
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var orm=require('orm');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(req, res){
    res.sendFile('search.html', {root: 'public'});
});
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(orm.express(`sqlite:///home/yunfeiyang/WebstormProjects/tw-movie-theater/movies.db`, {
    define: function (db, models, next) {
        models.Movie = db.define("movie", {
            title: String,
            alt: String,
            year: String,
            rating: String,
            directors: String,
            casts: String,
            image: String,
            original_title: String
        });
        next();
    }
}));
app.get('/movie_search', function (req, res) {
    let movie_name=req.query.movie_name;
    //console.log(movie_name);

    req.models.Movie.find({title:orm.like("%"+movie_name+"%")}, function(err, results) {
        if (err){
            res.status(400).send('资源不存在!')
        };
        //console.log(JSON.stringify(results))
        res.send(JSON.stringify(results));
    });
});
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
// app.get('/movie_search', function (req, res) {
//     let movie_name=req.query.movie_name;
//     console.log(movie_name);
//     var sqlite3 = require('sqlite3');
//     var db = new sqlite3.Database('movies.db',function() {
//         db.all(`select * from movie where title="${movie_name}"`, function (err, db_res) {
//             if (!err)
//                 res.status(200).send(JSON.stringify(db_res));
//             else
//                 res.status(404).send(err);
//         });
//     });
// });
// orm.connect("sqlite:///home/yunfeiyang/WebstormProjects/tw-movie-theater/movies.db", function (err,db) {
//     if (err) throw err;
//     let Movie=db.define('movie',{
//         title:String,
//         year:Number
//     });
//     Movie.find({title:'大鱼'},function (err,movie) {
//         if (err) throw err;
//         console.log(movie[0].title);
//     });
// });

