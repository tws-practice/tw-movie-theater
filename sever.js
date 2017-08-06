'use strict'
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
            director:String,
            review:String,
            director:String,
            actor:String
        
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
app.get('/movies/:id/types',function (req,res) {
    let id=req.params.id;
    req.models.movies.get(id,function (err, movie) {
        console.log(movie);
        req.models.movieToType.find({movieId:movie.id},function (err,typeIds) {
            let ids=[];
            for(let i=0;i<typeIds.length;i++){
                ids.push(typeIds[i].genreId)
            }
            req.models.types.find({id:ids},function (err,types) {
                res.send(types);
            })
        })
    });
});
app.get('/', function (req, res) {

    res.sendFile( __dirname+"/public/html/home.html");
    
});
//获得所有的电影
app.get('/movies', function (req, res) {

    req.models.movies.find(null,function (err, movies) {
        console.log(movies);
        res.send(movies);
    });
});
//获得某一部电影
app.get('/movies/:id', function (req, res) {
    let id=req.params.id;
    req.models.movies.get(id,function (err, movie) {
        console.log(movie);
        res.send(movie);
    });
});

//获得所有的类型
app.get('/types', function (req, res) {
    req.models.types.find(null,function (err, types) {
        console.log(types);
        res.send(types);
    });
});
//获得某一种类型的全部电影
app.get('/types/:id', function (req, res) {
    let id=req.params.id;
    req.models.movieToType.find({genreId:id},function (err,movieToType) {
        let movieIds=[];
            for(let i=0;i<movieToType.length;i++){
                movieIds.push(movieToType[i].movieId)
            }
            req.models.movies.find({id:movieIds},function (err,movies) {
                console.log(movies);
                res.send(movies);
            })
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});



