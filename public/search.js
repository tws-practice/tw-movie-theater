
"use strict"
let BASE_URL="http://localhost:8080";
function user_search_movie(movie_name) {
    $.ajax({
        type: 'GET',
        url: BASE_URL + '/movie_search'+`?movie_name=${movie_name}`,
        crossDomain: true,
        success: function (data) {
            //postSuccess();
            show_movie(data);
            // show_movie(data);
        },
        fail:function (data) {
            alert(data);
        }
    })
    }
    function show_movie(movies) {
    let movie_search_result=document.getElementById('movie_search_result');
    movie_search_result.innerHTML="";
    for (let movie of movies){
        let alt=movie.alt;
        let image=movie.image;
        let movie_search=document.createElement('div');
        movie_search_result.appendChild(movie_search);
        movie_search.setAttribute('class','movie');
        let detail=document.createElement('a');
        movie_search.appendChild(detail);
        detail.setAttribute('href','https://movie.douban.com/subject_search?search_text=%E6%88%98%E7%8B%BC&cat=1002');
        let img=document.createElement('img');
        detail.appendChild(img);
        img.setAttribute('src',image);
        img.setAttribute('alt',alt);
        let title=document.createElement('span');
        movie_search.appendChild(title);
        title.innerHTML='名称:'+movie.title;
        let original_title=document.createElement('span');
        movie_search.appendChild(original_title);
        original_title.innerHTML='别称:'+movie.original_title;
        let year=document.createElement('span');
        movie_search.appendChild(year);
        year.innerHTML='时间:'+movie.year;
        let rating=document.createElement('span');
        movie_search.appendChild(rating);
        rating.innerHTML='评分:'+movie.rating;
        let directors=document.createElement('span');
        movie_search.appendChild(directors);
        directors.innerHTML='导演:'+movie.directors;
        let casts=document.createElement('span');
        movie_search.appendChild(casts);
        casts.innerHTML='主演:'+movie.casts;
    }
        //alert(movie[0].title);
    }
