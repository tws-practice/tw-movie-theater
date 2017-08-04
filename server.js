let express = require('express');
let orm = require('orm');
let bodyParser=require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: true });
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
        models.T_user = db.define("T_user", {
            id:{type: 'number'},//评论的ID
            name:{type: 'text'},
            pasword:{type: 'text'},
            content:{type: 'text'}
        });
        /*类别的models*/
        models.T_category = db.define("T_category", {
            id:{type: 'number'},//评论的ID
            commentcontent:{type: 'text'}
        }, {
        });
        next();
    }
}));


/*制造用户假数据*/
app.get("/getw",urlencodedParser, function (req, res) {
    req.models.T_user.create({
        name:"333",
        pasword:"111",
        content:"中国人"},function (err) {
        if(err) throw err;
    });
    req.models.T_user.find({}, function (err, people) {
        if (err) throw err;
        res.send(people);
    });
});
/*制造评论假数据*/
app.get("/get",urlencodedParser, function (req, res) {
    req.models.T_comment.create({userid   : 1, //评论者的Id
        content  : "很好看", //评论内容
        date     : 20221256, //评论日期
        movieid  : 10},function (err) {
        if(err) throw err;
    });
    req.models.T_comment.find({}, function (err, comments) {
        if (err) throw err;
        res.send(comments);
    });
});

/*加载所有的类别  OK*/
app.get('/allClassify', function (req, res)  {
    req.models.T_category.find({}, function (err, classes) {
        if (err) throw err;
        res.send(classes);
    });
});
//获得一个电影的搜索结果
app.post("/oneSearchResult",urlencodedParser, function (req, res) {
    let moviename=req.body.moviename;
    req.models.T_movie.find({name:orm.like("%"+moviename+"%")}, function (err, movies) {
        if (err) throw err;
        res.send(movies);
    });
});
/*得到这个电影名称的搜索结果 OK*/
app.post("/searchResult",urlencodedParser, function (req, res) {
    let moviename=req.body.moviename;
    let comment=req.body.comment;
    req.models.T_movie.find({name:orm.like("%"+moviename+"%"),comment:orm.like("%"+comment+"%")}, function (err, movies) {
        if (err) throw err;
        res.send(movies);
    });
});
//获取电影详情 OK//
app.get('/getMovie/:id',function (req,res) {
    req.models.T_movie.find({id:req.params.id},function (err,ans) {
        if(err){
            console.log(err);
        } else {
            res.send(ans);
        }
    });
});
/*得到此类别的所有电影  OK*/
app.post("/classMovies",urlencodedParser, function (req, res) {
    let comment=req.body.comment;
    req.models.T_movie.find({comment:orm.like("%"+comment+"%")}, function (err, movies) {
        if (err) throw err;
        res.send(movies);
    });
});
//获取所有电影 OK//
app.post('/allMovies',function (req,res) {
    req.models.T_movie.find({}, function (err, movies) {
        if (err) throw err;
        res.send(movies);
    });
});
/*得到这个电影所有的影评  Ok*/
app.post("/getComment",urlencodedParser, function (req, res) {
    //查找评论的电影的ID,T_movie 中id的类型是String
    let movieid=req.body.movieid;
    req.models.T_comment.find({movieid:parseInt(movieid)}, function (err, comments) {
        if (err) throw err;
        /*已经找到所有的评论，存在comments里*/
        for (let i=0;i<comments.length;i++){
            req.models.T_user.find({id:parseInt(comments[i].userid)},function (err,people) {
                /*在评论里加一个用户名属性*/
                /*因为comments[i]是一个可操作的对象*/
                /*但是数据库中没有存username*/
                comments[i].username=people[0].name;
                /*如果是最后一条评论将结果返回*/
                if(i===comments.length-1){
                    res.send(JSON.stringify(comments));
                }
            });
        }
    });
});
/*判断是否能注册的请求,能注册返回true,不能注册返回false OK*/
app.post("/judgeusername",urlencodedParser,function (req,res) {
    let username=req.body.username;
    req.models.T_user.find({name:username},function (err,users) {
        if(users.length===0){
            res.send(true);
        } else {
            res.send(false);
        }
    });
});
/*注册的请求,将注册的用户name ,password,content的信息存入数据库 OK*/
app.post("/register",urlencodedParser,function (req,res) {
    let username=req.body.username;
    let password=req.body.password;
    let content=req.body.content;
    console.log(username,password,content);
    req.models.T_user.create({name:username,pasword:password,content:content},function (err) {
        if(err) throw err;
        else res.send(true);
    });
});
/*将评论存入数据库*/
app.post("/commentstorage",urlencodedParser,function (req,res) {
    console.log(req.body);
    // req.body=JSON.parse(req.body);
    let username=req.body.username;
    let date=new Date();
    let content=req.body.content;
    let movieid=req.body.movieid;
    req.models.T_comment.create({username:username,content:content,date: date,
        movieid:movieid},function (err) {
        if(err) throw err;
        else res.send(true);
    });

});
/*登录*/
app.get('/login', function (req, res) {
    let username = req.query.username;
    let password = req.query.password;
    req.models.T_users.exists({name: username, pasword: password}, function (err, exists) {
        if (err) {
            console.log('error!');
            throw err;
        }
        if (exists) {
            console.log('true');
            res.send('correct');
        }else{
            console.log('false');
            res.send('incorrect');
        }
    });
});



let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);

});

/*将信息初始化*/
app.get("/init",urlencodedParser, function (req, res) {

    /*
        let id=parseInt(req.body.id);
    */
    req.models.T_category.find({}, function (err, classes) {
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
                    req.models.T_category.create({name:result[i] }, function(err) {
                        if (err) throw err;
                    });
            }
            res.send(classes);
        });
    });
});
