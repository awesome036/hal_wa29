$(function () {
	$('input').val('input要素');
	$('#test2').val('id名');
	$('.test3').val('class名');
	$('#test4_1, #test4_2').val('id名を複数');
	$('div > input').val('divの子のinput要素');
	$('div input').val('divの子孫のinput要素');
	$('input[name]').val('name属性のある要素')
	$('input[name=nm8]').val('name属性の値がnm8の要素')
	$('.test9:first').val('最初の要素')
	$('.test10:nth-child(3)').val('3番目の要素')
	$('.test11:odd').val('奇数番目の要素')
	$('.test12:even').val('偶数番目の要素')
	$('.test13:gt(4)').val('5番目以降の要素')
	$('.test14:lt(4)').val('5番目より前の要素')
	$('.test15:last').val('最後の要素')
});