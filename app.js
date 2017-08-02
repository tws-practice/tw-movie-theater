let express = require('express');
let app = express();
let orm = require("orm");
// let sqlite3 = require("sqlite3");


app.use(orm.express("sqlite:///home/letra/WebstormProjects/tw-movie-theater/movies.db", {
    define: function (db, models, next) {
        models.movie = db.define("movie", {
            id:Number,
            alt:String,
            year:Number,
            title:String,
            rating:Number,
            original_title:String,
            directors:String,
            casts:String,
            image:String
        });
        models.genre = db.define("genre",{
            id:Number,
            name:String
        });
        models.movie_genre = db.define("movie_genre",{
            id:Number,
            movie_id:Number,
            genre_id:Number
        });
        next();
    }
}));

app.get('/search',function (req,res) {
    let movieTitle = req.query.title,chosenMoviesId=[];
    req.models.movie.find({title:orm.like(movieTitle+'%')},function (err,results) {
        console.log(results);
        results.forEach(function (movie,index) {
            chosenMoviesId.push(movie.id);
            if(index===results.length-1){
                res.send(chosenMoviesId);
            }
        });
    });
});

app.get('/movies/:id',function (req,res) {
    let movieId = req.params.id;
    req.models.movie.find({id:movieId},function (err,result) {
        res.send(result[0]);
    })
});

app.get('/movies/',function (req,res) {
    let genreName = req.query.genreName;
    req.models.genre.find({name:genreName},function (err,result) {
        req.models.movie_genre.find({genre_id:result[0].id},function (err,result) {
            res.send(result);
        })
    })
});

app.get('/movies/:id/similar',function (req,res) {
    let movieId = req.params.id;
    req.models.movie_genre.find({movie_id:movieId},function (err,result) {
        req.models.movie_genre.find({genre_id:result[0].genre_id},function (err,Result) {
            let similarMoviesArr=[];
            Result.forEach((idObj,index)=>{
                req.models.movie.find({id:idObj.movie_id},function (err,result) {
                    similarMoviesArr.push(result[0]);
                    if(index===Result.length-1){
                        res.send(similarMoviesArr);
                    }
                })
            })
        })
    })
});

let server= app.listen(9998,function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://localhost%s%s", host, port);
    console.log('Example app listening on port 9998!');
});

// orm.connect("sqlite:///home/letra/WebstormProjects/tw-movie-theater/movies.db",function (err,db) {
//        if(err) throw err;
//        let Person = db.define("person",{
//            name:String,
//            surname:String,
//            age:Number,//Float
//            male:Boolean,
//            continent: [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
//            phote:Buffer,
//            data:Object
//        },{
//            methods:{
//                fullName:function () {
//                    return this.name +''+this.surname;
//                }
//            },
//            validations:{
//                age:orm.enforce.ranges.number(18,undefined,"under-age")
//            }
//        });
//        db.sync(function (err) {
//            if(err){
//                throw err;
//            }
//            Person.create({id:1,name:"John",surname:"Doe",age:27},function (err) {
//                if (err) throw err;
//
//                // query the person table by surname
//                Person.find({ surname: "Doe" }, function (err, people) {
//                    // SQL: "SELECT * FROM person WHERE surname = 'Doe'"
//                    if (err) throw err;
//
//                    console.log("People found: %d", people.length);
//                    console.log("First person: %s, age %d", people[0].fullName(), people[0].age);
//
//                    people[0].age = 16;
//                    people[0].save(function (err) {
//                         err.msg = "under-age";
//                    });
//                });
//            });
//        });
// });


