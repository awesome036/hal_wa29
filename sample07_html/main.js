$(function () {
	let html = $('#contents').html();
	console.log(html);
	$('#contents').html('<p id="txt">p要素を追加</p>');

	let html2 = $('#contents2').html();
	console.log(html2);
	$('#contents2').html('<h2>h2</h2>');
});