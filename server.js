let express = require('express');
let orm = require('orm');

let bodyParser=require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });

let app = express();

app.use(express.static('Public'));

app.use(orm.express("sqlite:movie.db", {
    /*评论的数据库*/
    define: function (db, models, next) {
        /*评论的models*/
        models.T_comment = db.define("T_comment", {

            id:{type: 'number'},//评论的ID
            userid   : {type: 'text'}, //评论者的Id
            content  : {type: 'text'}, //评论内容
            date     : {type: 'text'}, //评论日期
            movieid  : {type: 'text'}, //评论电影的ID
        });
        /*电影的models*/
        models.T_movie = db.define("T_movie", {
            id:{type: 'number'},//评论的ID
            time    :{type: 'text'},    //电影发布时间
            name    :{type: 'text'},    //电影名称
            score   :{type: 'text'},    //评分
            directors:{type: 'text'},    //导演
            casts:{type: 'text'},       //主演
            comment:{type: 'text'},    //类型
            release:{type: 'text'},   //上映时间
            detail:{type: 'text'},   //详细信息
            origin_title:{type: 'text'},//电影的英文名称
            movieimg:{type: 'text'},   //电影图片的地址
            all:{type: 'text'}//保留字段
        });
        /*用户的models*/
        models.T_users = db.define("T_users", {
            id:{type: 'number'},//评论的ID
            name:{type: 'text'},
            pasword:{type: 'text'},
            content:{type: 'text'}
        });
        /*类别的models*/
        models.T_classes = db.define("T_category", {
            id:{type: 'number'},//评论的ID
            commentcontent:{type: 'text'}
        }, {
        });
        next();
    }
}));

/*加载所有的类别*/
app.get('/allClassify', function (req, res) {
    req.models.T_classes.find({}, function (err, classes) {
        if (err) throw err;
        res.send(JSON.stringify(classes));
    });
});

/*点击电影得到详细信息*/
app.post("/movieDetails",urlencodedParser, function (req, res) {
    /*前端传入电影名*/
    let id=req.body.id;
    req.models.T_movie.find({id:id}, function (err, movies) {

        if (err) throw err;
        res.send(movies[0]);
    });
});

/*得到这个电影名称的搜索结果*/
app.post("/searchResult",urlencodedParser, function (req, res) {
    let moviename=req.body.moviename;
    let comment=req.body.type;
    req.models.T_movie.find({name:moviename,comment:type}, function (err, movies) {
        if (err) throw err;
        res.send(movies);
    });
});
//获取电影详情
app.get('/getMovie/:id',function (req,res) {
    req.models.T_movie.find({id:req.params.id},function (err,ans) {
       if(err){
           console.log(err);
       } else {
        res.send(ans);
       }
    });
});
/*得到此类别的所有电影*/
app.post("/classMovies",urlencodedParser, function (req, res) {
    let classes=req.body.classes;
    req.models.T_movie.find({comment:classes}, function (err, movies) {
        if (err) throw err;
        res.send(movies);
    });
});
//获取所有电影
app.post('/allMovies',function (req,res) {
    req.models.T_movie.find({}, function (err, movies) {
        if (err) throw err;
        res.send(movies);
    });
});
/*得到所有的影评*/
app.post("/getComment",urlencodedParser, function (req, res) {
    let id=parseInt(req.body.id);
    req.models.T_comment.find({id:id}, function (err, comments) {
        if (err) throw err;
        res.send(comments);
    });
});


/*将信息初始化*/
app.get("/init",urlencodedParser, function (req, res) {

    /*
        let id=parseInt(req.body.id);
    */
    req.models.T_classes.find({}, function (err, classes) {
        if (err) throw err;
        req.models.T_movie.find({}, function (err, movies) {
            if (err) throw err;
            let result='';
            for(let i=1;i<movies.length;i++){
                let bb=movies[i].comment.split(',');
                console.log(bb);
                for(let j=0;j<bb.length;j++){
                    if(result.indexOf(bb[j])===-1){
                        result+=bb[j];
                        result+=',';
                    }
                }
            }
            result=result.split(',');
            for(let i=0;i<result.length;i++){
                if(result[i]!=='')
                    req.models.T_classes.create({name:result[i] }, function(err) {
                        if (err) throw err;
                    });
            }
            res.send(classes);
        });
    });
});

app.get('/login', function (req, res) {
    let username = req.query.username;
    let password = req.query.password;
    req.models.T_users.find({name: username, pasword: password}, function (err, reply) {
        if (err) {
            console.log('error!');
            throw err;
        }
        if (reply[0]) {
            console.log('true');
        }else{
            console.log('false');
        }
    });
});
let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);

});
