$(function () {
	$('img').css('position', 'absolute')
		.animate({ 'left': 300 }, 2000)
		// .attr('id')	// 戻り値にセレクターを返さないのでエラーになる
		.animate({ 'top': 300 }, 2000);
});