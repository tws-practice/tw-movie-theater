const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const index = require('./routes/index');

let app = express();

//数据库驱动
const orm = require('orm');
app.use(orm.express("sqlite:///home/lifeng/db/movies.db", {
    define: function (db, models, next) {
        models.Movies = db.define('movie', {
            id : Number,
            alt : String,
            year : Number,
            title : String,
            rating : String,
            original_title : String,
            directors : String,
            casts : String,
            image : String
        });

        models.Genre = db.define('genre',{
            id : Number,
            name : String
        });

        models.Movie_Genre = db.define('genre',{
            id : Number,
            movie_id : Number,
            genre_id : Number,
        });

        next();
    }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
