$(function () {
	$('input').val('値を変更しました');
	$('#title').val('セレクタの練習');
	$('.txt').val('クラス指定');
	$('input, #title, .txt').val('複数指定');
	$('div input').val('div内のinput');
	$('div > input').val('親要素にdivを持つinput');
	$('input[name]').val('name属性をもつinput')
	$('input[name=title]').val('nameにtitleをもつinput')
	$('li:first input').val('最初のli内のinput')
	$('li:nth-child(3) input').val('3番目のli内のinput')
	$('div:has(p)').css('border', 'solid 1px red')
});