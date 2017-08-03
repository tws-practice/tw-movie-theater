
# 代码设计

[项目预览地址](http://47.94.199.111:8081/)

## 关于使用git来进行团队协作

## 第一步

## 首先

## 数据库相关

### 这里使用了orm.js来管理SQLite数据库

#### 数据连接

```
//引入orm包
let orm = require('orm');
//设置orm连接
let db = orm.connect('sqlite:movie.db', function(err, db) {
    if (err) {
        return console.error('Connection error: ' + err);
    }else {
        return db;
    }
});
/*
    假设数据库movie.db里面已经有一张表person而且在这张表里面有id和name这两个字段(还可能有多个字段但是不影响取数据)
*/
//定义数据
let Per = db.define("person", {
    id: {type: 'number'},
    name: {type: 'text'}
});
//增加数据
Per.create({
    id : 2,
    name : '老王'
},function (err) {
    if(err){
        console.log(err);
    }
});
/*
    添加的数据
    id = 2
    name = 老王
    注意！这里添加的数据的Key必须与数据库里面的字段对应
*/
//查询数据
Per.find({id:1},function (err,ans) {
    console.log(ans.length);
    console.log(ans[0].name);
});
/*
    输出的数据
    1
    小王
    注意！这里取出的数据ans是一个数组对象
*/
//修改数据
Per.find({id:1},function (err,ans) {
    console.log(ans[0].name);
    ans[0].name = '小李';
    ans[0].save(function (err) {
        if(err){
            console.log(err);
        }
    })
});
/*
    输出的数据
    小王
    注意！执行save函数后如果未抛出异常即数据库person表内id为1的这条数据中的name值有小王更改为小李
*/
//删除数据
Per.find({id:1},function (err,ans) {
    console.log(ans[0].name);
    ans[0].remove(function (err) {
        if(err){
            console.log(err);
        }
    })
});
/*
    注意！执行remove函数后如果未抛出异常即数据库person表内id为1的这条数据从数据库中移除
*/
```
[orm中文文档地址](https://wizardforcel.gitbooks.io/orm2-doc-zh-cn/content/index.html)

[orm官方文档的地址](https://www.npmjs.com/package/orm)
## 结合express使用orm
```
//引入依赖文件
let express = require('express');
let orm = require('orm');
let app = express();
//express引入数据对象
app.use(orm.express("sqlite:testDB.db", {
    define: function (db, models, next) {
        models.Per = db.define("person", {
            id: {type: 'number'},
            name: {type: 'text'},
            age: {type: 'text'},
            continent: {type: 'text'},
            photo: {type: 'text'}
        });
        //otherTable...
        next();
    }
}));
//数据添加
app.get('/',function (req,res) {
    req.models.Per.create({
        id:1,
        name:"小王"
    },function (err) {
        console.log(err);
    })
});
/*
    用浏览器访问根地址既可以在数据库中添加一条数据
*/
//数据查询
app.get('/',function (req,res) {
    req.models.Per.find({id:1},function (err,ans) {
        res.json(ans[0]);
    })
});
/*
    用浏览器访问根地址返回的数据为
    {"id":1,"name":"小王","age":null,"continent":null,"photo":null}
    可以用axios接收数据进行处理
*/
//修改数据
app.get('/',function (req,res) {
    req.models.Per.find({id:1},function (err,ans) {
        ans[0].name = "小李";
        ans[0].save();
        res.json(ans[0]);
    })
});
/*
    用浏览器访问根地址返回的数据为
    {"id":1,"name":"小李","age":null,"continent":null,"photo":null}
    即数据已经修改
*/
//删除数据
app.get('/',function (req,res) {
    req.models.Per.find({id:1},function (err,ans) {
        ans[0].remove();
    })
});
/*
    用浏览器访问根地址
    查看数据库，数据已经被删除
*/
```


## 后台API规范

### GET 为后台为前台发送数据（数据获取）

#### 代码示例

```
app.get('/somewhere',function(req,res)){
     //dosomething...
    res.send('Hello');
}
```

### POST 为后台接收前台发送数据并发送结果（数据添加）

#### 代码示例

```
app.post('/somewhere',function(req,res)){
     //dosomething...
    res.send('Hello');
}
```

### PUT 为前台给后台发送数据（数据修改）

#### 代码示例

```
app.put('/somewhere',function(req,res)){
     //dosomething...
    res.send('Hello');
}
```

### DELETE 为前台给后台发送数据（删除）

#### 代码示例

```
app.delete('/somewhere',function(req,res)){
    //dosomething...
    res.send('Hello');
}
```

## 前台访问后台数据API规范

### 我们采用目前流行的前端HTTP请求工具axios 

[原文档地址](https://www.npmjs.com/package/axios)

[中文文档地址](https://www.kancloud.cn/yunye/axios/234845)

### 例子

### 其中的post换成get或者put或者delete

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

## 数据库表格的设计

### 数据库名称 movie.db

## 电影表 T_movie

### 内容

ID | 名字 | 时长 | 评分 | 详细信息 | 分类ID | 上映时间 | 电影图片 | 演员 | 导演

#### ID = id
#### 名字 = name
#### 时长 = time
#### 评分 = score
#### 详细信息 = detail
#### 分类ID = comment
#### 上映时间 = Release
#### 电影图片地址 = movieimg
#### 演员 = casts
#### 导演 = directors
#### 预留字段 all

## 评论表 T_comment

### 内容

ID | 电影ID | 内容 | 用户ID

#### ID = id
#### 电影ID = movieid
#### 内容 = content
#### 用户ID = userid

## 分类表 T_category

### 内容

ID | 内容

#### ID = id
#### 分类内容 = commentcontent

## 用户表 T_user

### 内容

ID | 名字 | 密码 | 详细信息

#### ID = id
#### 名字 = name
#### 密码 = pasword
#### 详细信息 = content

