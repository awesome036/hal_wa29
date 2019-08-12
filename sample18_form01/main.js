$(function () {
	function setMyForm(target) {
		let items = [];	// チェック対象となるテキスト入力要素

		// チェック
		let check = function () {
			// 名前のチェック
			checkEmpty(items[0], '名前を入力してください');
			// ふりがなのチェック
			checkEmpty(items[1], 'ふりがなを入力してください');
			// 電話番号のチェック
			checkEmpty(items[2], '電話番号を入力してください');
			// メールアドレスのチェック
			checkEmpty(items[3], 'メールアドレスを入力してください');
			// お問い合わせ内容のチェック
			checkEmpty(items[4], 'お問い合わせ内容を入力してください');
		}

		// エラーメッセージを表示
		let addErrorMessage = function (selector, msg) {
			removeErrorMessage(selector);
			selector.before('<span class="errorMsg">' + msg + '</span>');
			selector.addClass('errorInput');
		}

		// エラーメッセージを非表示
		let removeErrorMessage = function (selector) {
			let msgSelector = selector.parent().find('.errorMsg');
			if (msgSelector.length != 0) {
				msgSelector.remove();
				selector.removeClass('errorInput');
			}
		}

		let checkEmpty = function (selector, msg) {
			if (selector.val() == '') {
				// エラーメッセージを表示
				addErrorMessage(selector, msg);
				selector.prop('isSuccess', false);
			} else {
				// エラーメッセージを非表示
				removeErrorMessage(selector);
				selector.prop('isSuccess', true);
			}
		}

		// 初期設定
		let init = function () {
			// submitイベントの設定
			target.on({
				'submit': function () {
					// チェック
					check();
					return false;
				}
			});

			items = [
				target.find('input[name=forName]'),
				target.find('input[name=forFurigana]'),
				target.find('input[name=forTel]'),
				target.find('input[name=forEmail]'),
				target.find('textarea[name=forContact]'),
			];

			$.each(items, function (index) {
				items[index].prop('isSuccess', false);
			});

			// Enterキーでsubmitするのを防止
			target.find('input[type=text]').on({
				'keypress': function (e) {
					if (e.keyCode == 13) return false;
				}
			});
		}

		init();
	}

	setMyForm($('#myForm'));
});