jQuery.noConflict();
jQuery(function ($) {
	alert($('body').attr('id'));
});

document.observe("dom:loaded", function () {
	$('myBody').addClassName('myClass');
});