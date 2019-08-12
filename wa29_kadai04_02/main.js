$(function () {
	// 文字サイズ変更
	$('#btn1').on('click', function () {
		$('#keyword').css('fontSize', $('#size').val());
	});

	// 文字色変更
	$('input[type=color]').on('change', function (e) {
		$('#keyword').css('color', e.target.value);
	});

	// 文字を増やす
	$('#btn2').on('click', function () {
		$('#keyword').append('掘っても');
	});

	// 文字を戻す
	$('#btn3').on('click', function () {
		$('#keyword').text('掘っても').removeClass('shake')
			.css({
				'color': '#000000',
				'fontSize': '16px'
			});
	});

	// 文字を拡大
	$('#btn4').on('click', function () {
		let fontSize = $('#keyword').css('fontSize').replace('px', '') * 1.1;
		$('#keyword').css('fontSize', fontSize);
	});

	// 文字を縮小
	$('#btn5').on('click', function () {
		let fontSize = $('#keyword').css('fontSize').replace('px', '') * 0.9;
		$('#keyword').css('fontSize', fontSize);
	});

	// 文字を震えさせる
	$('#btn6').on('click', function () {
		$('#keyword').addClass('shake');
	});
});