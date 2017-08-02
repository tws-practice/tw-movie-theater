let express = require('express');
let app = express();

app.use(express.static('Public'));

const myMovie = [{
    name:'大鱼',
    score:'8.7',
    movieimg :'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p692813374.jpg'
},{
    name:'黑鹰坠落',
    score:'8.5',
    movieimg :'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910900710.jpg'
},{
    name:'怪兽电力公司',
    score:'8.6',
    movieimg :'https://img1.doubanio.com/view/movie_poster_cover/spst/public/p1805127697.jpg'
}];

app.get('/all',function (req,res) {
    res.json(myMovie);
});



app.listen('3002',()=>(console.log('123')));
