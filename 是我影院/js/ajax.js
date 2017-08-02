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
    let url = '/movies/';
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
    let name = $('.search #input')[0].value; //返回一个数组
    console.log(name);
    setTimeout("location.href = 'movie.html'", 1000);
    let url = '/siwo/search/?name=' + name;
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