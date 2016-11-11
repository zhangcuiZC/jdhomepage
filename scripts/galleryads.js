$(function() {
	var $imgrolls=$("#adstitle a");
	$imgrolls.css('opacity', '0.6');
	var $leftarrow=$("#galleryads .leftarrow");
	$leftarrow.css('opacity', '0.6');
	var $rightarrow=$("#galleryads .rightarrow");
	$rightarrow.css('opacity', '0.6');

	var len=$imgrolls.length;
	var index=0;
	var adTimer=null;
	$imgrolls.mouseover(function() {
		index=$imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();

	//
	$("#galleryads").hover(function() {
		$(this).find('#adstitle').stop().animate({bottom:"0"}, 300);
		$(this).find('.leftarrow').stop().animate({left:"0"},300);
		$(this).find('.rightarrow').stop().animate({right:"0"},300);
		if (adTimer) {
			clearInterval(adTimer);
		}
	}, function() {
		$(this).find('#adstitle').stop().animate({bottom:"-38px"}, 300);
		$(this).find('.leftarrow').stop().animate({left:"-25px"},300);
		$(this).find('.rightarrow').stop().animate({right:"-25px"},300);
		adTimer=setInterval(function () {
			showImg(index);
			index++;
			if (index==len) {
				index=0;
			}
		},5000);
	}).trigger('mouseleave');

	// $leftarrow.hover(function() {
	// 	$leftarrow.addClass('turnpic').css('opacity', '1.0');
	// }, function() {
	// 	$leftarrow.removeClass('turnpic').css('opacity', '0.6');
	// });
	// $rightarrow.hover(function() {
	// 	$rightarrow.addClass('turnpic').css('opacity', '1.0');
	// }, function() {
	// 	$rightarrow.removeClass('turnpic').css('opacity', '0.6');
	// });

	$leftarrow.click(function() {
		index=index-1;
		if (index<0) {
			index=len-1;
		}
		showImg(index);
	});
	$rightarrow.click(function() {
		index=index+1;
		if (index==len) {
			index=0;
		}
		showImg(index);
	});
})

function showImg(index) {
	var $rollobj=$("#galleryads");
	var $rolllist=$rollobj.find('#adstitle a');
	$rollobj.find('a').eq(index).stop(true,true).fadeIn().siblings("a").hide();
	$rolllist.removeClass('turnpic').css('opacity', '0.6').eq(index).addClass('turnpic').css('opacity', '1.0');
}

