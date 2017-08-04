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
function comment() {
    $.post('/getComment',{id:myurl[1]},function (response) {
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
    });
    // axios.post('/getComment',{id:myurl[1]})
    //     .then(function (response) {
    //         console.log(response);
    //         response=JSON.parse(response);
    //         response.forEach(function (value) {
    //             all[i]=`<div class='comment_item' id=${i.toString()}>
    //                    <div class="comment_user" id=${i.toString()}+'user'>
    //                    value.name
    //                    </div>
    //                    <div class="comment_date" id=${i.toString()}+'date'>
    //                    value.date
    //                    </div>
    //                    <div class="coment_content" id=${i.toString()}+'content'>
    //                    value.content
    //                    </div>
    //             </div>`;
    //             i++;
    //         });
    //         $('#gyf_third').append(all);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
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
    $.post('/commentstorage',datas,function (ans) {
        alert('提交成功');
    });
    // $.axios({
    //     type:'POST',
    //     url:'/commentstorage',
    //     dataType:'json',
    //     data:datas,
    //     success:function (resp) {
    //
    //     }
    // });
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

$('.cr-mysubmit').on('click',function () {
    let myselect = $('.cr-search-select').find("option:selected").html();
    let myinput  = $('.cr-myinput').val();
    if(myinput){
        if(myselect === '全部电影'){
            $.post('/oneSearchResult',{moviename:myinput},function (ans) {
                if(ans){
                    let str = '';
                    for (let i = 0; i < ans.length; i++) {
                        str += '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ttx-movie">';
                        str += `<a href="/moviecontain.html?id=${ans[i].id}"><img class="center-block ttx-movie-photo" src="${ans[i].movieimg}" width="65%" height="100%" alt=""></a>`;
                        str += `<p class="ttx-movie-text"><a href="/moviecontain.html?id=${ans[i].id}">${ans[i].name}</a><strong>${ans[i].score}</strong></p>`;
                        str += `</div>`;
                    }
                    $('.panel-heading-title').html("<span class='glyphicon glyphicon-search' style='font-size: 25px;'></span>&nbsp;&nbsp;搜索结果");
                    $(".ttx-search-contain").empty().append(str);
                }
            });
        }else {
            $.post('/searchResult',{comment:myselect,moviename:myinput},function (ans) {
                if(ans){
                    let str = '';
                    for (let i = 0; i < ans.length; i++) {
                        str += '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 ttx-movie">';
                        str += `<a href="/moviecontain.html?id=${ans[i].id}"><img class="center-block ttx-movie-photo" src="${ans[i].movieimg}" width="65%" height="100%" alt=""></a>`;
                        str += `<p class="ttx-movie-text"><a href="/moviecontain.html?id=${ans[i].id}">${ans[i].name}</a><strong>${ans[i].score}</strong></p>`;
                        str += `</div>`;
                    }
                    $('.panel-heading-title').html("<span class='glyphicon glyphicon-search' style='font-size: 25px;'></span>&nbsp;&nbsp;搜索结果");
                    $(".ttx-search-contain").empty().append(str);
                }
            });
        }
    }else {
        return bootbox.alert("请填写电影名称!");
    }

});

