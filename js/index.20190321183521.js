(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/unit-03-210.png' : 'images/unit-03-105.png');
$('.js2').attr('src', (dpi>1) ? 'images/net-02-96.png' : 'images/net-02-48.png');
$('.js3').attr('src', (dpi>1) ? 'images/net-01-96.png' : 'images/net-01-48.png');
$('.js4').attr('src', (dpi>1) ? 'images/net-03-96.png' : 'images/net-03-48.png');}else{$('.js').attr('src', (dpi>1) ? 'images/unit-03-70.png' : 'images/unit-03-35.png');
$('.js2').attr('src', (dpi>1) ? 'images/net-02-32.png' : 'images/net-02-16.png');
$('.js3').attr('src', (dpi>1) ? 'images/net-01-32.png' : 'images/net-01-16.png');
$('.js4').attr('src', (dpi>1) ? 'images/net-03-32.png' : 'images/net-03-16.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
initMenu($('#m2')[0]);
initMenu($('#m3')[0]);
$('.c').Stickyfill();

});