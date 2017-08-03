/**
 * Created by ashui on 17-8-2.
 */
`use strict`
function addRecommendSql(id) {
    $.ajax({
        type: 'GET',
        url: `/movies/${id}/similar`,
        data: Id,
        success: function(data) {
            addRecommends(data);
        }
    }).error(function(data) {
        getFailed(data);
    })
}
function addRecommends(data){
    data.forEach(function(item, index, array){
        if(index<12){
            addRecommendone(item);
        }
    })
}
function addRecommendone(oneMovie) {
    let $divBox=$(`<div class="col-xs-6 col-sm-4  col-md-2 "></div>`);
    let $dlBox=$(`<dl></dl>`);
    let $dtBox=$(`<dt></dt>`);
    let $aBox=$(`<a href="https://localhost:9998/movies/${oneMovie.id}"></a>`);
    let $imgBox=$(`<img src="${oneMovie.img}" alt="${oneMovie.name}" class="">`);
    let $ddBox=$(`<dd></dd>`);
    let $aTiltleBox=$(`<a href="https://localhost:9998/movies/${oneMovie.id}" class="">"${oneMovie.name}"</a>`);
    $("#row1").append($divBox);
    $divBox.append($dlBox);
    $dlBox.append($dtBox);
    $dtBox.append($aBox);
    $aBox.append($imgBox);
    $dlBox.append($ddBox);
    $ddBox.append($aTiltleBox);
}