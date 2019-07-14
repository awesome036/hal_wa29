$(function () {
	let photo = $('#photo');

	// 右スライド
	function slideToRight() {
		photo.animate({ 'left': 300 }, 1000, 'swing', function () {
			setTimeout(slideToLeft, 1500);
		});
	}

	// 左スライド
	function slideToLeft() {
		photo.animate({ 'left': 0 }, 1000, 'swing');
		slideToRight();
	}
	slideToRight();
}); 