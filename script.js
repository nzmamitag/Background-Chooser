$(document).ready(function () {
    $('#main_box').click(function () {
        $(this).css('background-image', 'none');
        $('.mini_boxes').css('border', 'none');
    });
    $('.mini_boxes').click(function (event) {
        $(this).css('border', '4px solid yellow');
        $('.mini_boxes').not(this).css('border', 'none');
        var img = $(this).attr('src');
        $('#main_box').css('background-image', 'url(' + img + ')');
        event.stopPropagation();
    });
});