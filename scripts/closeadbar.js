$(function(){
	$("#closeadbar").click(function() {
		$(this).siblings().fadeOut();
		$(this).hide();
	});
})