'use strict';
window.addEventListener('DOMContentLoaded',function(){
    $.get('/movies', function(movies,status){
        // alert(status);
        // alert(JSON.stringify(movies));

        for(let i = 0;i<12;i++){
            let s = `#mov${i}`;
            let name = `#movName${i}`
            $(s).attr('src', movies[i].image);
            $(name).append(movies[i].name);
        }
        $('#mov12').attr('src', movies[1].image) ;
        $('#movName12').append(movies[1].name);
    });
});

addEventListener("DOMContentLoaded",function () {
    document.getElementById('search-go').addEventListener('submit',function (event) {
        event.preventDefault();
        click();
        return false;

    })

});
$(document).ready(function(){
    $("#search-go").click(function () {
        $(".container-fluid").remove();
        var str=$("#search").val();
        $.get('/movies', function (movies){
            var html_movie="";
            var num=0;
            for(var i=0;i<movies.length;i++){
                var html ="";
                if(movies[i].name==str){
                    if(num==0){
                        html+='<div class="container-fluid " style="padding-left: 75px;padding-right: 75px;">'
                    }
                    if(num%4==0){
                        html+='<div class="row" id="first-row">';
                    }
                    html+=   `<div class="col-xs-6 col-md-3 shake shake-slow" id=${movies[i].id}> `;
                    html+="<figure>";
                    html+= '<a href=" " class="thumbnail">';
                    html+=  `<img src=${movies[i].image}> `;
                    html+="</a >";
                    html+= `<figcaption class=${movies[i].name}> `;
                    html+=   `<div>${movies[i].name}</div> `;
                    html+= '<a class="ds-button" href="#">';
                    html+='<span class="ds-button-inner">查看详情</span>';
                    html+="</a >";
                    html+=" </figcaption>";
                    html+="</figure>";
                    html+="</div>";
                    html+="</div>";
                    num++;
                }
                html_movie+=html;
            }
            html_movie+="</div>";
            $("#pageShow").prepend(html_movie);
        });
    });})

