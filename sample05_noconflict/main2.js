jQuery.noConflict();
jQuery(function () {
	alert(jQuery('body').attr('id'));
});

document.observe("dom:loaded", function () {
	$('myBody').addClassName('myClass');
});