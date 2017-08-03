"use strict";
define(function (require, exports, module) {
    let service = {
        root : 'localhost:3000/',
        Movies : {
            //获取所有电影(分页)
            getAllMovies : function () {
                return service.root + "movies"
            },
            //根据电影名字查询电影信息(模糊)
            getMovieByName : function (movieName) {
                return service.root + "movies/?movieName=" + movieName
            },
            //根据分类id查询电影
            getMoviesByGenreId : function (genreId) {
                return service.root + "movies/genre/?genreId=" + genreId
            }
        },
        Genre : {
            //查询所有的类别
            getAllGenre : function () {
                return service.root + "genres"
            },
            //根据id查类别
            getGenreById : function (genreId) {
                return service.root + "genres?genreId=" + genreId
            },
            //查询某电影的类别
            getGenreByMovieId : function (movieId) {
                return service.root + "genres/movie/?movieId=" + movieId
            }
        }
    };

    module.exports = service;
});