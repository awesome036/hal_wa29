$(function () {
	let photo = $('#photo');
	// フェードイン
	function open() {
		photo.fadeIn(3000, "easeInElastic", function () {
			setTimeout(close, 1000);
		});
	}

	// フェードアウト
	function close() {
		photo.fadeOut(3000, "easeOutElastic", function () {
			open();
		});
	}

	open();
});