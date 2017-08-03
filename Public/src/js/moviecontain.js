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
    $('.gyf-origin_title').html(`原著名称：`+ans.data[0].origin_title);
});
axios.get('/allClassify').then(function (ans) {
    let str2='';
    for(let i = 0; i<ans.data.length;i++){
        str2+= `<option role="presentation"><a href="#">${ans.data[i].commentcontent}</a></option>`
    }
    $('.cr-search-select').append(str2);
});
function searchMovie() {
    let moviename=$('#moviename');
    let comment=$('#comment');
}
function comment() {
    axios.post('/getComment',{id:myurl[1]})
        .then(function (response) {
            console.log(response);
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
    $.post({
        type:'POST',
        url:'/commentstorage',
        dataType:'json',
        data:datas,
        success:function (resp) {
            alert('提交成功');
        }
    });
});
$('.yhx-login').on('click',function () {
    let str = `<div class="form-group">
    <label for="exampleInputName1">账号</label>
    <input type="text" class="form-control" id="exampleInputName1" placeholder="账号">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="密码">
  </div>`;
    bootbox.confirm({
        title: "用户登录",
        message: str,
        buttons: {
            cancel: {
                label: '<i class="fa fa-times"></i> 取消'
            },
            confirm: {
                label: '<i class="fa fa-check"></i> 确认'
            }
        },
        callback: function (result) {
            console.log('This was logged in the callback: ' + result);
        }
    });
});
$('.yhx-signin').on('click',function () {
    let str = `<div class="form-group">
    <label for="exampleInputName2">账号</label>
    <input type="text" class="form-control" id="exampleInputName2" placeholder="账号">
    </div>
    <div class="form-group">
    <div class="form-group">
    <label for="exampleInputPassword2">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="密码">
    </div>`;
    bootbox.confirm({
        title: "注册账号",
        message: str,
        buttons: {
            cancel: {
                label: '<i class="fa fa-times"></i> 取消注册'
            },
            confirm: {
                label: '<i class="fa fa-check"></i> 确认注册'
            }
        },
        callback: function (result) {
            console.log('This was logged in the callback: ' + result);
        }
    });
});



