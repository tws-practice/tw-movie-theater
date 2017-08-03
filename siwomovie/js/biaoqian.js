function addColor() {
    $('.g-clear a').on('click', function() {
        $(this).siblings().removeClass('choose'); //先去掉再添加
        $(this).addClass('choose');
    })
}
//预备函数，遍历类型。返回一个数组
function getfilter() { //bupuliu.js
    $('.g-clear a').on('click', function() {
        //let cl = $(this).parent().attr('class');
        let filterArr = [];
        let cl = $(this).parent().parent().parent();
        let div = $(cl).children('div');
        for (let i = 0; i < 3; i++) {
            let $a = $(div[i]).children().children();
            let len = $a.length;
            for (let j = 1; j < len; j++) {
                if ($a[j].className !== '') {
                    filterArr[i] = $a[j].innerHTML;
                }
            }
            filterArr[i] = filterArr[i] === undefined ? '' : filterArr[i];
        }
        console.log(filterArr);
        getfiltermovie(filterArr); //ajax.js
    });
    $('.g-clear dt').on('click', function() {
        $(this).siblings().removeClass('choose'); //先去掉再添加
        let filterArr = [];
        let cl = $(this).parent().parent().parent();
        let div = $(cl).children('div');
        for (let i = 0; i < 3; i++) {
            let $a = $(div[i]).children().children();
            let len = $a.length;
            for (let j = 1; j < len; j++) {
                if ($a[j].className !== '') {
                    filterArr[i] = $a[j].innerHTML;
                }
            }
            filterArr[i] = filterArr[i] === undefined ? '' : filterArr[i];
        }
        console.log(filterArr);
        getfiltermovie(filterArr); //ajax.js
    })
}