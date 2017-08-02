$(window).load(function() {
    goTop();
    getimages();
});

function getimages() {
    let html = '';
    html += "<div class='get1'><a href='./single.html'>";
    // Image tag (preview in Wookmark are 200px wide, so we calculate the height based on that).
    html += '<img src="images/1.jpg">';
    // Image title.
    html += '<p>hello</p>';
    html += '</a></div>';
    $('#pubu').append(html);
}