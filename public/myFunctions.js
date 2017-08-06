'use strict'

$(document).ready(function () {
    let MOVIEID;
    /*$.get('/movies', function (movies){
        $(".gallery-box clear").empty();
        var str=$("#search").text();
        for(var i=0;i<movies.length;i++){
            if(movies[i].name,indexOf(teststr)!=-1){
                $(".movies[i].name").parent().parent().show();
            }
        }
    });*/

        $.get('/movies', function(movies){
            //alert(status);
            //alert(JSON.stringify(movies));
            $('#mov1').attr('src', movies[0].image) ;
            $('#movname1').html(movies[0].name);
            $('#movbotton1').on('click',function () {

                $.get('/movies',function (ans) {
                    window.location.href='/showFiles.html';

                    //turnNew(MOVIEID);

                })
               // alert(hrefToId($('#mov1').attr('src')));
                //turnNew(hrefToId($('#mov1').attr('src')))
            });

        });

    /*$('#sss').on('click',function () {
        alert('sss')
        window.location.href='/showFiles.html';
    })*/



})

/*function hrefToId(movieImage) {
    $(document).ready(function () {
        $.get('/movies',function (ans) {
            for(let i=0;i<ans.length;i++){
                if(ans[i].image==movieImage){
                    return ans[i].id;
                }
            }

        })
    })


}*/

let movieId=2;
    $(document).ready(function () {
        $.get(`/movies/${movieId}`,function (movie) {
            //alert(JSON.stringify(movie));
            $("#movieName").html(movie.name);//
            $("#idInfo").attr("src",`${movie.image}`);
            $("#director").html(movie.director);
            $("#mainActor").html(movie.actor);
            $("#maker").html(movie.nation);
            $("#language").html(movie.language);
            $("#showTime").html(movie.releaseDate);
            $("#filmTime").html(movie.runningTime);
            $("#movieIntro").html(movie.description);
            $("#comment").html(movie.review);
        });
        $.get(`/movies/${movieId}/types`,function (reply) {

            $.get(`types/${reply[0].id}`,function (movies) {
                //alert(movies.length);
                $("#movie1").attr("src",`${movies[0].image}`);
                $("#movie2").attr("src",`${movies[1].image}`);
                $("#movie3").attr("src",`${movies[2].image}`);
                $("#movie4").attr("src",`${movies[3].image}`);
            })
        })
    })

