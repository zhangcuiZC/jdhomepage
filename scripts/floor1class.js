$(function () {
	$("#floor1 .floor1contentdetail").eq(0).show();
	
	$("#floor1 .td1").next().find('p').css('borderLeftColor', '#fff');
	$("#floor1 .td1").css('color', '#c81625');

	
	$("#floor1class td").mouseover(function() {
		
		$(this).siblings().find('p').css('borderLeftColor', '#dfdfdf');
		$(this).addClass('td1').siblings().removeClass('td1');
		$(this).css('color', '#c81625').siblings().css('color', '#666');
		
		$(this).next().find('p').css('borderLeftColor', '#fff');
		$(this).find('p').css('borderLeftColor', '#fff');
		
		var index=$(this).index();
		$("#floor1 .floor1contentdetail").eq(index).show().siblings(".floor1contentdetail").hide();
		
	});
})