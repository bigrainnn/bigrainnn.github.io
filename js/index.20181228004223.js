(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.27.52-305.jpg' : 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.27.52-152.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.46.50-239.jpg' : 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.46.50-119.jpg');
$('.js-3').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.47.04-248.jpg' : 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.47.04-124.jpg');
$('.js-4').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.47.19-248.jpg' : 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.47.19-124.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.47.37-268.jpg' : 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.47.37-134.jpg');
$('.js-6').attr('src', (dpi>1) ? 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.47.48-246.jpg' : 'images/ping-mu-kuai-zhao-2018-12-13-xia-wu1.47.48-123.jpg');};
if(!window.HTMLPictureElement){r();}

});