/**
 * Created by xxx on 17-8-2.
 */
'use strict';
///home/chj/WebstormProjects/tw-movie-theater/testDB.db
//MOVIEID NAME DESCRIPTION RELEASEDATE IMAGE NATION LANGUAGE RUNNINGTIME DIRECTOR REVIEW
var express = require('express');
var bodyparser = require('body-parser');
var orm = require('orm');
var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(orm.express("sqlite:/home/xxx/Documents/tw-movie-theater/testDB.db", {
    define: function (db, models, next) {
        models.movies = db.define("movieInformation", {
            id:Number,
            name:String,
            description:String,
            releaseDate:String,
            image:String,
            nation:String,
            language:String,
            runningTime:Number,
            review:String,
            actor:String,
            director:String
        });
        models.types=db.define("GENRE",{
            id:Number,
            genre:String
        });
        models.movieToType=db.define("GENRESEARCH",{
            genreId:Number,
            movieId:Number
        });
        next();
    }

}));
app.get('/', function (req, res) {

    //res.sendFile( __dirname+"");
    req.models.movies.find(null,3,function (err, movies) {
        console.log(movies);
        res.send(movies);
    });


});
app.get('/movies', function (req, res) {

    req.models.movies.find(null,12,function (err, movies) {
        console.log(movies);
        res.send(movies);
    });
});
app.get('/movies/:id', function (req, res) {
    let id=req.params.id;
    req.models.movies.get(id,function (err, movie) {
        console.log(movie);
        res.send(movie);
    });
});
app.get('/types', function (req, res) {
    req.models.types.find(null,function (err, types) {
        console.log(types);
        res.send(types);
    });
});
var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;


    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});