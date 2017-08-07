
# 代码设计

[项目预览地址](http://47.94.199.111:8081/)

## 关于使用git来进行团队协作

## 第一步
## 欢迎加入git学习之旅
### 思路上:
我们应该在本地仓库上有master和another(自定义)分支,在远程仓库上也有master和another分支(名字和本地仓库一样相对应)，为什么我们需要两个分支呢，因为如果你在本地的master上工作，当你想提交到远程仓库之前如果有队友已经提交过新代码了，你本地master上（除了你加的）代码就和远程仓库的代码不同，git则会报你无法push并提示你要pull,但是你执行git pull 又会提示你本地仓库的代码已经超过远程仓库的代码的进程，不是队友提交之前远程master上的代码，就会出现矛盾无法pull（后面讲解决办法），所以我们需要先在本地的another上作业，并保持本地的master代码是最新的远程master代码(经常git pull origin master)，当做好改动后将本地的another提交到远程的another上，再将远程的another和远程的master融合，再用git pull origin master将远程的master拉到本地的master上就可以实现无障碍代码流通咯！
 
 **(总结：本地的master是远程的最新的版本之前的版本就不会有冲突了)**
***
### 步骤上:

1. **git checkout -b another** (创建本地another分支并进入another分支)

	*（git branch another 创建分支， git checkout another 进入分支 ）*

2. **git add filePath**(将修改内容添加到本地仓库another分支的缓存区上)

3. **git commit -m'text'**(将add的内容提交到本地仓库的another分支上)

4. **git checkout master**(从another分支退出进入本地master分支)

5. **git pull origin master**(将远程master分支内容拉到本地master分支)

6. **git checkout another**(从本地master分支进入本地another分支)

7. **git rebase master**(将第5步拉下来的代码和本地master分支以复位基底的方式融合)

8. **手动解决冲突**

9. **git push origin another**(将本地的another分支推到远程的another分支上)

	*（完整写法：git push origin another:another 不用担心你远程分支还没创建，github会自动帮你创建）*

10. **点击 pull request**(在远程仓库界面进入自己提交的分支，申请提交至远程master分支)

11. **审核代码，代码通过，融合至master分支**

**回到第一步**
* * *
### 知识延伸：
**1.何为复位基底（git rebase）？其与git merge的区别**
	
基本图片：

![Alt base](/READMEpic/base.png)

git merge

![Alt merge](/READMEpic/merge.png)
	
git rebase

![Alt rebase](/READMEpic/rebase.png)


**总结：git merge会把分支的合并结果放在最后，git rebase 会把当前分支的提交放在要合并分支的后面**


**2.冲突解决:**

如果不同人在同一文件的同一行进行了修改，pull下来后就会出现冲突，此时git无法智能地帮你融合，必须你手动解决，git rebase解决冲突的过程是根据你git commit的次数分阶段让你解决冲突，也就是说你如果在rebase之前commit了三次，git 将会从你第一次提交的内容开始寻找冲突的部分，你可以使用git status查看你冲突的文件然后进行选择，解决冲突，其中你会看到形如:

![Alt conflict](/READMEpic/conflit.png)

*其中<<<<<<<HEAD到=======之间是你自己修改的内容，=====到>>>>>>>是别人修改的内容(可以用中国思维记忆：我和你，我一般在前面)*

当你解决好了第一次commit的冲突，之后执行git add -u（把解决好的内容加入缓存），再执行git rebase --continue，之后出现第二次commit的冲突，再执行git status.....后面做法相似，直到所有冲突解决


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

