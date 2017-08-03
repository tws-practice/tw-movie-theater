class movie {
    constructor(id, name, actors, language, summa, year, type, area, pic, comments) {
        this.id = id;
        this.name = name;
        this.actors = actors;
        this.language = language;
        this.summa = summa;
        this.year = year;
        this.type = type;
        this.area = area;
        this.pic = pic;
        this.comments = comments;
    }
} ///movie对象

function getallmovies() { ///获取所有电影列表
    let url = 'http://liust.ngrok.cc/getAllMovie';

    $.ajax({
        url: url,
        type: "GET",
        success: function(data) {
            //将Jdata转化为对象数组

            for (let i = 0; i < data.length; i++) {
                //增加电影到页面上面
                let id = './single.html/?id=' + data[i].id; ///将id改变
                console.log(id);
                getimages(id); //bupuliu.js
            }

        },
        complete: function() {
            console.log('complete');
        },
        error: function(error) {
            console.log(error);
        }
    });

}

function gethomemovies() { //获取首页三个电影
    let url = '/siwo/movies/';
    $.ajax({
        url: url,
        type: "GET",
        success: function(data) {

        },
        complete: function() {
            console.log('complete');
        },
        error: function() {
            console.log('error');
        }
    });
}


function getsearchmovie() {
    clearMovie(); //显示页面之前也让内容为空
    let name = $('.search #input')[0].value; //返回一个数组
    console.log(name);
    setTimeout("location.href = 'movie.html'", 1000);
    let url = '/siwo/search/?name=' + name;
    $.ajax({
        url: url,
        type: "GET",
        success: function(data) {
            clearMovie(); ///删除原来的页面
            console.log('get data'); ///获得查找的内容
            if (data = '') { //如果查找内容为空
                alert(`电影${name}未找到`)
            } else {
                for (let i = 0; i < data.length; i++) {
                    let id = data[i].id;
                    getimages(id); ///bululiu.js
                }
            }
        },
        complete: function() {
            console.log('complete');
        },
        error: function() {
            console.log('error');
        }
    });
}


function getfiltermovie(filterArr) { //通过标签进行选择电影
    let url = '/siwo/movies/';
    $.ajax({
        url: url,
        type: "GET",
        data: {
            'type': filterArr[0],
            'area': filterArr[1],
            'year': filterArr[2]
        },
        success: function(data) {
            clearMovie();
            if (data = '') { //如果查找内容为空
                alert(`电影${name}未找到`);
            } else {
                for (let i = 0; i < data.length; i++) {
                    let id = data[i].id; //电影id
                    let pic = data[i].pic; //电影图片
                    let name = data[i].name; //电影名称
                    getimages(id, pic, name); ///bululiu.js
                }
            }
        },
        complete: function() {
            console.log('complete');
        },
        error: function() {
            console.log('error');
        }
    });
}

function getMovieDetail(id) { ///得到的数据是通过传输获得的电影的id,
    let url = '/movie/id=' + id;
    $.ajax({
        url: url,
        type: "GET",
        success: function(data) { ///得到一个电影对象
            //do something
            renderDetail(data); ///render.js
        },
        complete: function() {
            console.log('complete');
        },
        error: function() {
            console.log('error');
        }
    });
}

function movieDetail() { ///得到某个电影的细节内容
    $()
}