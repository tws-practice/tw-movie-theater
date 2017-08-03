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
function comment() {
    $axios.post('/getComment')
        .then(function (response) {
            response=JSON.parse(response);
            response.forEach(function (value) {
                all[i]=`<div class='comment_item' id=${i.toString()}>
                       <div class="comment_user" id=${i.toString()}+'user'>
                       value.name
                       </div>
                       <div class="comment_date" id=${i.toString()}+'date'>
                       value.date
                       </div>
                       <div class="coment_content" id=${i.toString()}+'content'>
                       value.content
                       </div>
                </div>`;
                i++;
            });
            $('#gyf_third').append(all);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function onfourth() {
    $.get('/movieDetails',{movieType:$(`movieType`)},function(data){
        let suggestMovie=JSON.parse(data);
        for (let i=0;i<4;i++) {
            $('#Cui-movie').append(`<div class="col-md-3"><div class="container"><a href="#" class="thumbnail"><img src="suggestMovie[i].movieimg" alt="suggestMovie[i].name" class="Cui-image"/><p>suggestMovie[i].name</p></a></div>
</div>`)
        }
    });
}
$('#commentBottom').on('click',function () {
    let datas={};
    datas.userid=$('#username').text();
    datas.content=$('#text').value();
    datas.moviename=$('.panel-heading-title').text();
    $.axios({
        type:'POST',
        url:'/commentstorage',
        dataType:'json',
        data:datas,
        success:function (resp) {
            alert('提交成功');
        }
    });
});
