$(document).ready(function() {
    getallmovies(); ///ajax.js
    goTop();
    addColor();
    getfilter();
});

//ajax
function getimages(id) { ///增加数据到页面上面
    let html = '';
    console.log(id);
    html += "<div class='get1'><a  target='_blank' href=" + `${id}` + '>';
    // Image tag (preview in Wookmark are 200px wide, so we calculate the height based on that).
    html += '<img src="images/1.jpg">';
    // Image title.
    html += '<p>hello</p>';
    html += '</a></div>';
    $('#pubu').append(html);
}

function clearMovie() {
    //console.log('清除');
    $('#pubu').html('');
}