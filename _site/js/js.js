// fancybox
jQuery(document).ready(function($) {
    var select = $('a[href$=".bmp"],a[href$=".gif"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".BMP"],a[href$=".GIF"],a[href$=".JPG"],a[href$=".JPEG"],a[href$=".PNG"]a[href$=".png"]');
    select.attr('rel', 'fancybox');
    select.fancybox();
});

$(document).ready(function() {
    $(".fancybox").fancybox();
});