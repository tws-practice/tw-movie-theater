const express = require('express');
const router = express.Router();


//获取所有电影(分页)-----"movies"
router.get('/movies', function(req, res) {

});
//根据电影名字查询电影信息(模糊)----"movies/?movieName="
router.get('/movies/:movieName', function(req, res) {

});
//根据分类id查询电影----"movies/genre/?genreId="
router.get('/movies/genre/:genreId', function(req, res) {

});
//查询所有的类别----"genres"根据id查类别
router.get('/genres', function(req, res) {

});
//根据id查类别----"genres?genreId=" + genreId
router.get('/genres/:genreId', function(req, res) {

});
//查询某电影的类别----"genres/movie/?movieId=" + movieId
router.get('/genres/movie/:movieId', function(req, res) {

});

// router.get('/movies', function (req, res) {
//     req.models.movie.find({id:1291560}, function(err, movie) {
//         if (err) {
//             res.send(err)
//         }
//         console.log(movie);
//         res.json(movie);
//     });
// });
//
// router.get('/genre', function (req, res) {
//     // req.models is a reference to models used above in define()
//     req.models.genre.find({}, function(error, genre) {
//         console.log(genre);
//         res.json(genre);
//     });
// });
//
// router.get('/movie/horror', function (req, res) {
//     // req.models is a reference to models used above in define()
//     req.models.movie_genre.find({genre_id:9},function(err, movie_genreIds){
//         if (err) {
//             res.send(err)
//         }
//         let movieIds = [];
//         for (let i = 0; i<movie_genreIds.length; i++) {
//             movieIds.push(movie_genreIds[i].movie_id);
//         }
//         console.log(movie_genreIds)
//         console.log(movieIds);
//         req.models.movie.find({id:movieIds},function(err,movies){
//             console.log(movies);
//             res.json(movies);
//         })
//     })
// });


module.exports = router;
