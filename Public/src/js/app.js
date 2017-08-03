axios.post('/allMovies').then(function (ans) {
    let str = '';
    let mynum = parseInt((ans.data.length/16)+1);
    let myourstr = '';
    for(let j = 1;j<=mynum;j++){
        myourstr += `<li><a href="#">${j}</a></li>`;
    }
    $('.ttx-my-number').append(myourstr);
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
            str+=`<span class="label" role="presentation" style="display: inline-block"><a href="#">${ans.data[i].commentcontent}</a></span>`
        // str+= `<li role="presentation"><a href="#">${ans.data[i].commentcontent}</a></li>`
    }
    $('#ttx-comment-first').after(str);
    let str2='';
    for(let i = 0; i<ans.data.length;i++){
        str2+= `<option role="presentation"><a href="#">${ans.data[i].commentcontent}</a></option>`
    }
    $('.cr-search-select').append(str2);
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
    <!--<label for="exampleInputNa">姓名</label>
    <input type="text" class="form-control" id="exampleInputNa" placeholder="姓名">
    </div>-->
    <div class="form-group">
    <label for="exampleInputPassword2">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="密码">
    </div>
    <!--<div class="form-group">
    <label for="exampleInputCePassword2">确认密码</label>
    <input type="password" class="form-control" id="exampleInputCePassword2" placeholder="确认密码">
    </div>
    <div class="form-group">
    <label for="exampleInputPassword2">详细信息</label>
    <input type="text" class="form-control" id="exampleInputDetails" placeholder="详细介绍">
    </div>-->`;
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
$(document).ready(function () {
    $("body").on("click", '.myallcategory>li', function(){
        $(this)[0].className = 'active';
        $(this).siblings().removeClass();
    });
});
function searchMovie() {
    let moviename=$('#moviename');
    let comment=$('#comment');
}
