$(function () {
	$('#btn1').on('click', function () {
		console.log('ボタン１がクリックされました。');
	});
	$('#btn2').click(function () {
		console.log('ボタン2がクリックされました。');
	});
	$('#btn3').on(
		'click',
		{ msg: 'ボタン3がクリックされました。' },
		function (e) { console.log(e.data.msg); }
	);
	$('#btn4').click(
		{
			msg1: 'ボタン4がクリックされました。',
			msg2: 'こんにちは',
			msg3: 'さようなら'
		},
		function (e) {
			console.log(e.data.msg1);
			console.log(e.data.msg2);
			console.log(e.data.msg3);
		}
	);
	$('#btn5').click(
		{
			name: '江畑',
			mail: 'ebata@aaa.bbb',
			tel: '1234567890'
		},
		eventFunc
	);
	$('#btn6').click(
		{
			name: '清水',
			mail: 'shimizu@aaa.bbb',
			tel: '1234567890'
		},
		eventFunc
	);
	$('#btn7').click(function (e) {
		console.log(e);
	});
	$('#btn8').on({
		'click': function (e) {
			console.log(e.type);
		},
		'mouseover': function () {
			console.log('mouseover');
		},
		'mouseout': function () {
			console.log('mouseout');
		}
	});
	$('#btn9').on(
		'click mouseover mouseout',
		function (e) { console.log(e.type); }
	);

	$(window).on('resize', function () {
		$('#window_size').val(
			$(window).width() + ':' +
			$(window).height()
		);
	});

	$(document).on('mousemove', function (e) {
		$('input').not('#window_size').val(
			'e.pageX:' + e.pageX + ' ' +
			'e.pageY:' + e.pageY
		);
	});

	function eventFunc(e) {
		console.log('name:' + e.data.name);
		console.log('mail:' + e.data.mail);
		console.log('tel:' + e.data.tel);
	}
});