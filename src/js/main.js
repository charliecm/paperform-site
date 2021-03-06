/**
 * Main Interactions
 */

/* global $ */

$(function() {

	$('img[data-src]').unveil(200, function() {
	    $(this)
	        .css('opacity', 0)
	        .load(function() {
	            this.style.opacity = 1;
	        });
	});

});

/*!*
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */
!function(a){a.fn.unveil=function(b,c){function j(){var b=h.filter(function(){var b=a(this);if(!b.is(":hidden")){var c=d.scrollTop(),f=c+d.height(),g=b.offset().top,h=g+b.height();return h>=c-e&&f+e>=g}});i=b.trigger("unveil"),h=h.not(i)}var i,d=a(window),e=b||0,f=window.devicePixelRatio>1,g=f?"data-src-retina":"data-src",h=this;return this.one("unveil",function(){var a=this.getAttribute(g);a=a||this.getAttribute("data-src"),a&&(this.setAttribute("src",a),"function"==typeof c&&c.call(this))}),d.on("scroll.unveil resize.unveil lookup.unveil",j),j(),this}}(window.jQuery||window.Zepto);