var orm = require("orm");

orm.connect("sqlite:movie.db", function (err, db) {
    if (err) throw err;

    var T_comment = db.define("T_comment", {
        userid   : String,
        comment     : Number, // FLOAT
        contentdate  : Boolean,
        movieid     : String, // BLOB/BINARY
    }, {
    });

    var T_movie = db.define("T_movie", {
    name:String,
    time:String,
    score:String,
    detail:String,
    comment:String,
    Release:String,
    movieimg:String,
    }, {
    });

    var T_users = db.define("T_users", {
        name:String,
        pasword:String,
        content:String
    }, {
    });

    var T_classes = db.define("T_movie", {
        name:String,
    }, {
    });

    // add the table to the database
    db.sync(function(err) {
        if (err) throw err;

        // add a row to the person table
        T_comment.create({
            id:9,
            userid   : "001",
            comment     : "很好看", // FLOAT
            contentdate  : "不好看",
            movieid     : "8888", // BLOB/BINARY
        }, function(err) {
            if (err) throw err;
        });
    });
});