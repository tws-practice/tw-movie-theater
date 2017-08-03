function getDataFromSQ(Id) {
    $.ajax({
        type: 'GET',
        url: "/movies/",
        data: Id,
        success: function(data) {
            loadData(data);
        }
    }).error(function(data) {
        getFailed(data);
    })
}
function loadData(data) {
    $("#mainImage img src").html(data.image);
    
}