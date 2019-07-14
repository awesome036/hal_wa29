$(function () {
	function photoChange(target) {
		let photoList = target.find('#photolist li');
		let tnList = [];
		let current = 0;

		// 画像のフェードイン
		function open() {
			tnList[current].attr('class', 'open');
			$(photoList[current]).stop().fadeIn(1000, 'easeInQuad');
		}

		// 画像のフェードアウト
		function close() {
			tnList[current].attr('class', 'close');
			$(photoList[current]).stop().fadeOut(1000, 'easeOutQuad');
		}

		// サムネイル画像による画像切り替え
		function clickTn(num) {
			if (current != num) {
				close();
				current = num;
				open();
			}
		}

		// 初期設定
		function init() {
			target.find('#tnlist li').each(function (index) {
				tnList[index] = $(this).find('img');
				$(this).find('a').on('click', function () {
					clickTn(index);
				});
			});
		}

		init();
		open();
	}

	photoChange($('#photoBox'));
});