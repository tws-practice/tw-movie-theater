let myurl = window.location.href.split("?id=");
axios.get('/getMovie/'+myurl[1]).then(function (ans) {
    console.log(ans.data[0]);
    $('.panel-heading-title').html(ans.data[0].name+`<small>(${ans.data[0].release})</small>`);
    $('.movie-img').attr('src',ans.data[0].movieimg);
    $('.gyf-directors').html(`导演：`+ans.data[0].directors);
    $('.gyf-score').html(`评分：`+ans.data[0].score);
    $('.gyf-comment').html(`所属类别：`+ans.data[0].comment);
    $('.gyf-casts').html(`主演：`+ans.data[0].casts);
    $('.gyf-detail').html(`  `+ans.data[0].detail);
    $('.gyf-origin_title').html(`英文名称：`+ans.data[0].origin_title);
});