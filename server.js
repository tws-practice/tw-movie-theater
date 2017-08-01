var express = require('express');
var orm = require('orm');
var app = express();

app.use(orm.express("sqlite:movie.db", {
    /*评论的数据库*/
    define: function (db, models, next) {
        /*评论的models*/
        models.T_comment = db.define("T_comment", {
            userid   : String,
            comment     : Number, // FLOAT
            contentdate  : Boolean,
            movieid     : String, // BLOB/BINARY
        });
        /*电影的models*/
        models.T_movie = db.define("T_movie", {
            userid   : String,
            comment     : Number, // FLOAT
            contentdate  : Boolean,
            movieid     : String, // BLOB/BINARY
        });
        /*用户的models*/
        models.T_users = db.define("T_users", {
            name:String,
            pasword:String,
            content:String
        });
        /*类别的models*/
        models.T_classes = db.define("T_classes", {
            name:String
        }, {
        });
        next();
    }
}));

app.get("/", function (req, res) {
    // req.models is a reference to models used above in define()
    req.models.T_comment.find({movieid: "8888" }, function (err, movies) {
        // SQL: "SELECT * FROM person WHERE surname = 'Doe'"
        if (err) throw err;

        console.log("People found: %d %s", movies.length,movies[0].movieid);
        console.log( movies[0]);

        movies[0].userid = "000001";
        movies[0].save(function (err) {
            // err.msg = "under-age";
        });
    });
});

app.listen(8081);