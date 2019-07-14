$(function () {
	function photoChange(target) {
		let items = target.find('li');
		let current = 0;

		// フェードイン
		function open() {
			$(items[current]).fadeIn(
				1200,
				"easeInQuad",
				function () { setTimeout(change, 1500); }
			);
		}

		// フェードアウト
		function close() {
			$(items[current]).fadeOut(1200, "easeOutQuad");
		}

		// 画像切り替え
		function change() {
			close();
			current = ++current % items.length;
			open();
		}

		open();
	}

	photoChange($('#photolist'));
});