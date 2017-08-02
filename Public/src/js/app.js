axios.get('/all').then(function (ans) {
    let str = '';
    for (let i = 0; i < ans.data.length; i++) {
        str += '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ttx-movie">';
        str += `<img class="center-block ttx-movie-photo" src="${ans.data[i].movieimg}" width="65%" height="100%" alt="">`;
        str += `<p class="ttx-movie-text"><a href="/">${ans.data[i].name}</a><strong>${ans.data[i].score}</strong></p>`;
        str += `</div>`;
    }
    $(".ttx-movie-container").append(str);
});