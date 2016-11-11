$(function () {
	var page=1;
	
	$("#tuijianleftarrow").css('opacity', '0.6');
	$("#tuijianrightarrow").css('opacity', '0.6');


	$("#tuijianleftarrow").click(function() {
		var $parent=$(this).parents("#scrollads");
		var $adsshow=$parent.find('#scrolladspic');

		if (!$adsshow.is(':animated')) {
			if (page==1) {
				$adsshow.animate({left:"-3000px"}, "fast");
				page=4;
			}else{
				$adsshow.animate({left:"+=1000px"}, "slow");
				page--;
			}
		}
	});

	$("#tuijianrightarrow").click(function() {
		var $parent=$(this).parents("#scrollads");
		var $adsshow=$parent.find('#scrolladspic');

		if (!$adsshow.is(':animated')) {
			if (page==4) {
				$adsshow.animate({left:"0px"}, "fast");
				page=1;
			}else{
				$adsshow.animate({left:"-=1000px"}, "slow");
				page++;
			}
		}
	});

	$("#scrollads").hover(function() {
		$(this).find('#tuijianleftarrow').stop().animate({left:"0"},300);
		$(this).find('#tuijianrightarrow').stop().animate({right:"0"},300);
	}, function() {
		$(this).find('#tuijianleftarrow').stop().animate({left:"-25px"},300);
		$(this).find('#tuijianrightarrow').stop().animate({right:"-25px"},300);
	}).trigger('mouseleave');

	// $("#tuijianleftarrow").hover(function() {
	// 	$(this).addClass('turnpic').css('opacity', '1.0');
	// }, function() {
	// 	$(this).removeClass('turnpic').css('opacity', '0.6');
	// });
	// $("#tuijianrightarrow").hover(function() {
	// 	$(this).addClass('turnpic').css('opacity', '1.0');
	// }, function() {
	// 	$(this).removeClass('turnpic').css('opacity', '0.6');
	// });
})