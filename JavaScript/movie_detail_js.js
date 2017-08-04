$('body').scrollspy({ target: '#navbar' });

$("#search_btn").click(function () {
    let keywords=document.getElementById('search_input').value;

    $.get(`/search_movie?search_keywords=${keywords}`,(movieInfo) => {
//            alert('数据：'+JSON.stringify(result));
//            console.log('数据：'+JSON.stringify(result));
//         window.location='/HTML/movie_detail.html';
        let movie_name=document.getElementsByClassName("movie_name");
        for(let i=0;i<movie_name.length;i++){
            movie_name[i].innerHTML=movieInfo[0].MovieName;
        }
        let movie_img=document.getElementById("movie_img").setAttribute("src", movieInfo[0].ImgUrl);
        let director=document.getElementById("director");
        director.innerHTML=movieInfo[0].Direcrtor;
        let writers=document.getElementById("writers");
        writers.innerHTML=movieInfo[0].Writers;
        let stars=document.getElementById("stars");
        stars.innerHTML=movieInfo[0].Starring;
        let type=document.getElementById("type");
        type.innerHTML=movieInfo[0].Type;
        let areas=document.getElementById("areas");
        areas.innerHTML=movieInfo[0].Area;
        let language=document.getElementById("language");
        language.innerHTML=movieInfo[0].Language;
        let release_data=document.getElementById("release_data");
        release_data.innerHTML=movieInfo[0]['Release date'];
        let time=document.getElementById("time");
        time.innerHTML=movieInfo[0].Time;
        let words=document.getElementById("introduction-words");
        words.innerHTML=movieInfo[0].Introduction;
        let scores=document.getElementById("scores");
        scores.innerHTML=movieInfo[0].MovieGrade;
        let score=document.getElementById("score");
        let star=parseInt(movieInfo[0].MovieGrade/2);
        for(let i=0;i<star;i++){
            let span=document.createElement("span");
            span.setAttribute("class", "glyphicon glyphicon-star");
            score.appendChild(span);
        }
        if(movieInfo[0].MovieGrade-star*2>=1){
            let span=document.createElement("span");
            span.setAttribute("class", "glyphicon glyphicon-star-empty");
            score.appendChild(span);
        }


    })
        .done(function() {
        window.history.pushState(null, null, `/search/${document.getElementById('search_input').value}`);
    });

});

