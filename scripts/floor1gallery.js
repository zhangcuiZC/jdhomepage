$(function () {
	//初始化，第一个点为红色，箭头为半透明
	var page=1;
	var adTimer=null;
	$("#floor1content .points").eq(0).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
	$("#floor2content .points").eq(0).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
	$(".leftarrow").css('opacity', '0.6');
	$(".rightarrow").css('opacity', '0.6');
	

	//鼠标放在箭头上时，箭头变红,【-----------------所有箭头通用-------------------】
	$(".leftarrow").hover(function() {
		$(this).addClass('turnpic').css('opacity', '1.0');
	}, function() {
		$(this).removeClass('turnpic').css('opacity', '0.6');
	});
	$(".rightarrow").hover(function() {
		$(this).addClass('turnpic').css('opacity', '1.0');
	}, function() {
		$(this).removeClass('turnpic').css('opacity', '0.6');
	});

	//点击右箭头
	$("#floor1rightarrow").click(function() {
		if (!$("#floor1content .floor1gallery").is(':animated')) {
		if (page!=4) {
			$("#floor1content .floor1gallery").animate({left:"-=439px"}, "normal");
			$("#floor1content .points").eq(page).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
			page++;
		}else{
			$("#floor1content .floor1gallery").animate({left:"0px"}, "normal");
			$("#floor1content .points").eq(0).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
			page=1;
		}
		}
	});

	//点击左箭头
	$("#floor1leftarrow").click(function() {
		if (!$("#floor1content .floor1gallery").is(':animated')) {
		if (page!=1) {
			$("#floor1content .floor1gallery").animate({left:"+=439px"}, "normal");
			$("#floor1content .points").eq(page-2).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
			page--;
		}else{
			$("#floor1content .floor1gallery").animate({left:"-1317px"}, "normal");
			$("#floor1content .points").eq(3).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
			page=4;
		}
	}
	});

	//每5s自动滚动，鼠标放在div上时箭头出现，移走箭头消失
	$("#floor1content .floor1gallerydiv").hover(function() {
		$(this).find('#floor1leftarrow').stop().animate({left:"0"},300);
		$(this).find('#floor1rightarrow').stop().animate({right:"0"},300);
		if (adTimer) {
			clearInterval(adTimer);
		}
	}, function() {
		$(this).find('#floor1leftarrow').stop().animate({left:"-25px"},300);
		$(this).find('#floor1rightarrow').stop().animate({right:"-25px"},300);
		adTimer=setInterval(function () {
			if (page!=4) {
				$("#floor1content .floor1gallery").animate({left:"-=439px"}, "normal");
				$("#floor1content .points").eq(page).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
				page++;
			}else{
				$("#floor1content .floor1gallery").animate({left:"0px"}, "normal");
				$("#floor1content .points").eq(0).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
				page=1;
				
			}
		},5000);
	}).trigger('mouseleave');

	//鼠标放在点上时移动图片
	$("#floor1content .points").mouseover(function() {
		var index=$(this).index();
		page=index+1;
		var num=index*439;
		$("#floor1content .points").eq(index).css('backgroundColor', '#c81623').siblings().css('backgroundColor', '#333');
		$("#floor1content .floor1gallery").stop(true).animate({left: -num+'px'}, "normal");
	});

})