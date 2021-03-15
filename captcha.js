$( document ).ready(function() { 
	initCaptcha();
	setInterval(function() {
		initCaptcha();
	}, 10000);
});

function initCaptcha() {
	var captcha = generateCaptcha(),
		captchaAns = eval(captcha);
	
	$("#captcha")
		.attr("placeholder", captcha+" = ")
		.on("keyup", function() {
			if ($(this).val() !== "" && $(this).val() == captchaAns)
				$(this).addClass("correct");
                
			else
				$(this).removeClass("correct");
		});
}

function generateCaptcha() {
	var randomNo = function(n) {
		return Math.floor(Math.random()*n + 1);
	}

	var randomOp = function() {
		return "+-*"[randomNo(3)-1];
	}
	return randomNo(10)+" "+randomOp()+" "+randomNo(10);
}