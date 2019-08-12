$(function () {

	setChange($('#abc .inp'), $('#abc .err'), /abc/);
	setChange($('#abcStart .inp'), $('#abcStart .err'), /^abc/);
	setChange($('#abcEnd .inp'), $('#abcEnd .err'), /abc$/);
	setChange($('#smallEng .inp'), $('#smallEng .err'), /^[a-z]+$/);
	setChange($('#largeEng .inp'), $('#largeEng .err'), /^[A-Z]+$/);
	setChange($('#num4 .inp'), $('#num4 .err'), /^\d{4}$/);		// \d = [0-9]

	function setChange(input, error, pattern) {
		input.on('keypress keyup',
			{ inp: input, err: error, pat: pattern },
			function (e) {
				let value = e.data.inp.val();

				if (value.match(e.data.pat)) {
					e.data.err.text('OK');
				} else {
					e.data.err.text('NG');
				}
			});
	}
});