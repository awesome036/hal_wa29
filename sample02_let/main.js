$(function () {
	console.time('timer');
	for (let i = 0; i < 10; i++) {
		// $('#list li').removeClass('dummy');
		// $('#list li').addClass('item');
		// $('#list li').css('color', 'red');

		let target = $('#list li');
		// target.removeClass('dummy');
		// target.addClass('item');
		// target.css('color', 'red');

		target.removeClass('dummy').addClass('item').css('color', 'red');
	}
	console.timeEnd('timer');

});