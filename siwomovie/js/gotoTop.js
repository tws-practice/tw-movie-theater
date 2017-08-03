function goTop() {
    $(window).scroll(function(e) {
        //若滚动条距离顶部大于100px
        if ($(window).scrollTop() > 100) {
            $("#gotop").fadeIn(100); //显示隐藏的元素
        } else {
            $('#gotop').fadeOut(100);
        }
    })
}

function Totop() {
    $("#gotop").on('click', function(e) {
        $('body,html').animate({ scrollTop: 0 }, 100);
    });
    goTop();
    //实现回到顶部的样式
}
$(function() {
    $("#slider").responsiveSlides({
        auto: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        pager: true,
    });
    $("#gotop").click(function(e) {
        //以1秒的间隔返回顶部
        $('body,html').animate({ scrollTop: 0 }, 100);

    });
    goTop(); //实现回到顶部元素的渐显与渐隐
    getAll();
});

function getAll() {
    $('#allmovies').on('click', function() {
        //获得所有数据，并且添加到页面中
        //console.log('allmovies');

        setTimeout("location.href = 'movie.html'", 1000);

    })
}