axios.post('/allMovies').then(function (ans) {
    let str = '';
    for (let i = 0; i < ans.data.length; i++) {
        str += '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ttx-movie">';
        str += `<a href="/moviecontain.html?id=${ans.data[i].id}"><img class="center-block ttx-movie-photo" src="${ans.data[i].movieimg}" width="65%" height="100%" alt=""></a>`;
        str += `<p class="ttx-movie-text"><a href="/moviecontain.html?id=${ans.data[i].id}">${ans.data[i].name}</a><strong>${ans.data[i].score}</strong></p>`;
        str += `</div>`;
    }
    $(".ttx-movie-container").append(str);
});
axios.get('/allClassify').then(function (ans) {
    let str = '';
    for(let i = 0; i<ans.data.length;i++){
        str+= `<li role="presentation"><a href="#">${ans.data[i].commentcontent}</a></li>`
    }
    $('#ttx-comment-first').after(str);
});
$(document).ready(function () {
    $("body").on("click", '.myallcategory>li', function(){
        $(this)[0].className = 'active';
        $(this).siblings().removeClass();
    });
});