// "use strict"
// //打开数据库
// var sqlite3 = require('sqlite3');
// // or  var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database('movie.db');
//
// // 关闭数据库
// db.close();
//
// db.run('xx');  // 数据库对象的run函数可以执行任何的SQL语句，该函数一般不用来执行查询
//                // create alter 之类的
//
//
// //增:
//     var stmt = db.prepare("INSERT OR REPLACE INTO note (cdate, content) VALUES (?,?)");
// stmt.run(data.cdate, data.content);
// stmt.finalize();
//
// //删:
//     db.prepare("DELETE  from note where cdate =?");
// stmt.run(data.cdate);
// stmt.finalize();
//
// //改:
//     var stmt = db.prepare("UPDATE note set content=? where cdate =?");
// stmt.run(data.content, data.cdate);
// stmt.finalize();
//
// //查:
//     db.each("SELECT rowid AS id, thing FROM Stuff", function(err, row) {
//         console.log(row.id + ": " + row.thing);
//     });
// // or
// db.all("SELECT xxx", function (err, res){});