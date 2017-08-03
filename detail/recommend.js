/**
 * Created by ashui on 17-8-2.
 */
`use strict`
function addRecommendSql(id) {
    $.ajax({
        type: 'GET',
        url: `/movies/${id}/similar`,
        data: Id,
        success: function(data) {
            addRecommends(data);
        }
    }).error(function(data) {
        getFailed(data);
    })
}
function addRecommends(data){
    data.forEach(function(item, index, array){
        let number=0;
        if(index<12){
            if(number<6){
                addRecommendOne(item,'rom1');
            }
            else{
                addRecommendOne(item,'rom2');
            }
            number++;
        }
    })
}
function addRecommendOne(oneMovie,rom='rom1') {
    let $divBox=$(`<div class="col-xs-6 col-sm-4  col-md-2 "></div>`);
    let $dlBox=$(`<dl></dl>`);
    let $dtBox=$(`<dt></dt>`);
    let $aBox=$(`<a href="${oneMovie.alt}"></a>`);
    let $imgBox=$(`<img src="${oneMovie.image}" alt="${oneMovie.title}" class="">`);
    let $ddBox=$(`<dd></dd>`);
    let $aTiltleBox=$(`<a href="${oneMovie.alt}" class="">"${oneMovie.title}"</a>`);
    if(rom=='rom1'){
        $(`#row1`).append($divBox);
    }
    if(rom=='rom2'){
        $(`#row2`).append($divBox);
    }
    $divBox.append($dlBox);
    $dlBox.append($dtBox);
    $dtBox.append($aBox);
    $aBox.append($imgBox);
    $dlBox.append($ddBox);
    $ddBox.append($aTiltleBox);
}

const movies=[
    {
    "id": 837,
    "alt": "https://movie.douban.com/subject/1316510/",
    "year": 1993,
    "title": "射雕英雄传之东成西就",
    "rating": "8.7",
    "original_title": "射鵰英雄傳之東成西就",
    "directors": "刘镇伟",
    "casts": "梁朝伟,林青霞,张国荣",
    "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1993903133.jpg",
    "name": "运动",
    "movie_id": 1316510,
    "genre_id": 27
},
    {
        "id": 1044,
        "alt": "https://movie.douban.com/subject/1306249/",
        "year": 1993,
        "title": "唐伯虎点秋香",
        "rating": "8.4",
        "original_title": "唐伯虎點秋香",
        "directors": "李力持",
        "casts": "周星驰,巩俐,陈百祥",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1946455272.jpg",
        "name": "运动",
        "movie_id": 1306249,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1044,
        "alt": "https://movie.douban.com/subject/1306249/",
        "year": 1993,
        "title": "唐伯虎点秋香",
        "rating": "8.4",
        "original_title": "唐伯虎點秋香",
        "directors": "李力持",
        "casts": "周星驰,巩俐,陈百祥",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1946455272.jpg",
        "name": "运动",
        "movie_id": 1306249,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    },
    {
        "id": 1126,
        "alt": "https://movie.douban.com/subject/1303394/",
        "year": 1993,
        "title": "青蛇",
        "rating": "8.4",
        "original_title": "青蛇",
        "directors": "徐克",
        "casts": "张曼玉,王祖贤,赵文卓",
        "image": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p584021784.jpg",
        "name": "运动",
        "movie_id": 1303394,
        "genre_id": 27
    }
]
addRecommends(movies);