$(function () {
	//初始化，第一个点为红色，箭头为半透明（在floor1class中）
	var page=1;
	var adTimer=null;

	//鼠标放在箭头上时，箭头变红,【-----------------所有箭头通用-------------------】


	//点击右箭头
	$("#floor2rightarrow").click(function() {
		if (!$("#floor2content .floor2gallery").is(':animated')) {
		if (page!=4) {
			$("#floor2content .floor2gallery").animate({left:"-=339px"}, "normal");
			$("#floor2content .points").eq(page).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
			page++;
		}else{
			$("#floor2content .floor2gallery").animate({left:"0px"}, "normal");
			$("#floor2content .points").eq(0).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
			page=1;
		}
		}
	});

	//点击左箭头
	$("#floor2leftarrow").click(function() {
		if (!$("#floor2content .floor2gallery").is(':animated')) {
		if (page!=1) {
			$("#floor2content .floor2gallery").animate({left:"+=339px"}, "normal");
			$("#floor2content .points").eq(page-2).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
			page--;
		}else{
			$("#floor2content .floor2gallery").animate({left:"-1017px"}, "normal");
			$("#floor2content .points").eq(3).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
			page=4;
		}
	}
	});

	//每5s自动滚动，鼠标放在div上时箭头出现，移走箭头消失
	$("#floor2content .floor2gallerydiv").hover(function() {
		$(this).find('#floor2leftarrow').stop().animate({left:"0"},300);
		$(this).find('#floor2rightarrow').stop().animate({right:"0"},300);
		if (adTimer) {
			clearInterval(adTimer);
		}
	}, function() {
		$(this).find('#floor2leftarrow').stop().animate({left:"-25px"},300);
		$(this).find('#floor2rightarrow').stop().animate({right:"-25px"},300);
		adTimer=setInterval(function () {
			if (page!=4) {
				$("#floor2content .floor2gallery").animate({left:"-=339px"}, "normal");
				$("#floor2content .points").eq(page).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
				page++;
			}else{
				$("#floor2content .floor2gallery").animate({left:"0px"}, "normal");
				$("#floor2content .points").eq(0).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
				page=1;
				
			}
		},5000);
	}).trigger('mouseleave');

	//鼠标放在点上时移动图片
	$("#floor2content .points").mouseover(function() {
		var index=$(this).index();
		page=index+1;
		var num=index*339;
		$("#floor2content .points").eq(index).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
		$("#floor2content .floor2gallery").stop(true).animate({left: -num+'px'}, "normal");
	});

})