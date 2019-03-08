(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/unit-02-210.png' : 'images/unit-02-105.png');
$('.js2').attr('src', (dpi>1) ? 'images/net-02-96.png' : 'images/net-02-48.png');
$('.js3').attr('src', (dpi>1) ? 'images/net-01-96.png' : 'images/net-01-48.png');
$('.js4').attr('src', (dpi>1) ? 'images/net-03-96.png' : 'images/net-03-48.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
initMenu($('#m3')[0]);
initMenu($('#m4')[0]);
initMenu($('#m5')[0]);
$('.c').Stickyfill();

});