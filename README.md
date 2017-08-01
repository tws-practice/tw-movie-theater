# 代码设计

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
    id = 1
    name = 老王
    注意！这里添加的数据必须与数据库里面的数据对应
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

```
[orm中文文档地址](https://wizardforcel.gitbooks.io/orm2-doc-zh-cn/content/index.html)

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

## 前台访问后台数据规范

### 我们采用目前流行的前端HTTP请求工具axios 

[文档地址](https://www.npmjs.com/package/axios)

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

ID|名字|时长|评分|详细信息|分类ID|上映时间|电影图片

#### ID = id
#### 名字 = name
#### 时长 = time
#### 评分 = score
#### 详细信息 = detail
#### 分类ID = comment
#### 上映时间 = Release
#### 电影图片地址 = movieimg

## 评论表 T_comment

### 内容

ID|电影ID|内容|用户ID

#### ID = id
#### 电影ID = movieid
#### 内容 = content
#### 用户ID = userid

## 分类表 T_category

### 内容

ID|内容

#### ID = id
#### 分类内容 = commentcontent

## 用户表 T_user

### 内容

ID|名字|密码|详细信息

#### ID = id
#### 名字 = name
#### 密码 = pasword
#### 详细信息 = content






