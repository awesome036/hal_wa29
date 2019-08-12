$(function () {
	function setMyForm(target) {
		let items = [];	// チェック対象となるテキスト入力要素

		// チェック
		let check = function () {
			// inputのチェック
			for (let i = 0; i < items.length; i++) {
				items[i].blur();
			}
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

		let checkEmptyText = function (selector, msg) {
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

		// 文字列のフォーマットチェック
		function checkFormatText(selector, checkmode, msg) {
			let value = selector.val();
			let checkPattern = function (pattern) {
				if (value.match(pattern)) {
					selector.prop('isSuccess', true);
					removeErrorMessage(selector);
				} else {
					selector.prop('isSuccess', false);
					addErrorMessage(selector, msg);
				}
			}
			switch (checkmode) {
				// 全角のみ
				case 0:
					checkPattern(/^[^\x01-\x7E]+$/);
					break;
				// 全角ひらがなのみ
				case 1:
					checkPattern(/^[ぁ-ん]+$/);
					break;
				// 電話番号
				case 2:
					checkPattern(/^\d{10}$|^\d{11}$/);
					break;
				// メールアドレス
				case 3:
					checkPattern(/^\S+@\S+\.\S+$/);
					break;
			}
		}

		// 初期設定
		let init = function () {
			// submitを無効にする
			target.find('input[type=submit]').attr('disabled', false);

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

			// 名前のセレクタにblurイベントを設定
			items[0].on({
				'blur': function () {
					checkEmptyText(items[0], '名前を入力してください');
					if (items[0].prop('isSuccess')) checkFormatText(items[0], 0, '入力フォーマットが正しくありません');

					// submitの制御
					let errorCount = 0;
					for (let i = 0; i < items.length; i++) {
						if (items[i].prop('isSuccess') == false) {
							errorCount++;
						}
					}
					if (errorCount > 0) {
						target.find('input[type=submit]').attr('disabled', false);
					} else {
						target.find('input[type=submit]').attr('disabled', true);
					}
				}
			});

			// ふりがなのセレクタにblurイベントを設定
			items[1].on({
				'blur': function () {
					checkEmptyText(items[1], 'ふりがなを入力してください');
					if (items[1].prop('isSuccess')) checkFormatText(items[1], 1, '入力フォーマットが正しくありません');
				}
			});

			// 電話番号のセレクタにblurイベントを設定
			items[2].on({
				'blur': function () {
					checkEmptyText(items[2], '電話番号を入力してください');
					if (items[2].prop('isSuccess')) checkFormatText(items[2], 2, '入力フォーマットが正しくありません');
				}
			});

			// メールアドレスのセレクタにblurイベントを設定
			items[3].on({
				'blur': function () {
					checkEmptyText(items[3], 'メールアドレスを入力してください');
					if (items[3].prop('isSuccess')) checkFormatText(items[3], 3, '入力フォーマットが正しくありません');
				}
			});

			// お問い合わせのセレクタにblurイベントを設定
			items[4].on({
				'blur': function () {
					checkEmptyText(items[4], 'お問い合わせ内容を入力してください');
				}
			});

		}

		init();
	}

	setMyForm($('#myForm'));
});