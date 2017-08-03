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
//查询所有的类别----"genres"   [{"id":1,"name":"剧情"},{"id":2,"name":"喜剧"}...]
router.get('/genres', function(req, res) {
  req.models.Genre.find({}, function (err, ans) {
    res.status(200).json({data : ans});
  });
});
//根据id查类别----"genres?genreId=" + genreId    //返回的数据:{"data":{"id":1,"name":"剧情"}}
router.get('/genres/:genreId', function(req, res) {
    let genreId = req.params.genreId;
    req.models.Genre.find({id:genreId}, function(error, genres) {
        if(genres.length===1){
            res.status(200).json({data:genres[0]})
        }else {
            res.status(200).json({data:genres[0]})
        }
    });
});
//查询某电影的类别----"genres/movie/?movieId=" + movieId
router.get('/genres/movie/:movieId', function(req, res) {

});

module.exports = router;
