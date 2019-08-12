$(function () {
	$('#btn1').on('click', function () {
		$('body').append('<p>押したよ</p>');
	});
	$('#btn2').click(function () {
		console.log('ボタン2がクリックされました。');
	});
});