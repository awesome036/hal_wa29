$(function () {
	function photoChange(target) {
		let photoList = target.find('#photolist li');
		let current = 0;
		let tnList = [];
		let timer;
		let prevBtn = $('#prev a');
		let nextBtn = $('#next a');

		// 画像のフェードイン
		function open() {
			prevBtn.off('click');
			nextBtn.off('click');
			$(photoList[current]).stop().fadeIn(1200, 'easeInQuad', function () {
				checkControl();
				timer = setTimeout(change, 2000);
			});
		}

		// 画像のフェードアウト
		function close() {
			$(photoList[current]).stop().fadeOut(1200, 'easeOutQuad', checkControl);
		}

		// コントロールボタンによる画像の切り替え
		function clickControl(type) {
			close();
			switch (type) {
				case 'prev':
					current--;
					break;
				case 'next':
					current++;
					break;
			}
			open();
		}

		// コントロールボタンの設定
		function checkControl() {
			switch (current) {
				case 0:
					showControl(nextBtn);
					break;
				case photoList.length - 1:
					showControl(prevBtn);
					break;
				default:
					showControl(prevBtn);
					showControl(nextBtn);
					break;
			}
		}

		// コントロールボタンを表示する
		function showControl(btn) {
			btn.show();
			btn.off('click').on('click', function () {
				clickControl($(this).parent().attr('id'));
			});
		}

		// 画像の自動切換え
		function change() {
			close();
			current = ++current % photoList.length;
			open();
		}

		// サムネイル画像による画像切り替え
		function clickTn(num) {
			if (current != num) {
				clearTimeout(timer);
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
		checkControl();
		change();

	}

	photoChange($('#photoBox'));
});