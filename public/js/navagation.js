$(function () {
    $('.search-toggle').click(function() {
        $(this).toggleClass('toggled');
        $('.headline-search').toggleClass('toggled');
        return false;
    });
    $(document).mouseup(function(e) {
        let container = $('.headline-search')
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.search-toggle').removeClass('toggled');
            $('.headline-search').removeClass('toggled');
            $('.searchtext .suggestion', container).hide();
            return true
        }
    });
});
