$(function () {
	$("#detailclass li").hover(function() {
		$(this).addClass('selectedclass').find('.dropdownclass').show();
		$(this).find('.maindc').addClass('selectedclass');
	}, function() {
		$(this).removeClass('selectedclass').find('.dropdownclass').hide();
		$(this).find('.maindc').removeClass("selectedclass");
	});
})