$(function () {
	$('#txt1').css('color', '#f00')
	$('#txt2').css('font-size', '24px')
	$('#txt3').css('fontSize', '32px')
	$('#txt1').css('font-weight', 'bold')
	$('#txt4').css({
		'color': 'purple',
		'font-size': '40px',
		'font-weigth': 'bold'
	})
	let color = $('#txt4').css('color');
	console.log(color);
	$('#txt1').css('color', color);
	$('#box1').width('40px').height('200px').css('backgroundColor', 'lightblue');
	$('#box2').width('70px').css('backgroundColor', 'lightyellow');

});