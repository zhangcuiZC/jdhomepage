$(function(){
	$("#kehufuwu").hover(function() {
		$(this).css({
					border:"1px solid #b1b1b1",
					borderBottom:"none",
					borderTop:"none",
					paddingLeft:"3px",
					paddingRight:"3px",
					backgroundColor:"#fff",
					
					})
		.find(".dropdownkefu").fadeIn();

	}, function() {
		$(this).css({
					backgroundColor:"#f1f1f1",
					border:"none",
					paddingRight:"4px",
					paddingLeft:"4px"
		            })
		.find(".dropdownkefu").hide();
	});
})

$(function(){
	$("#webnav").hover(function() {
		$(this).css({
					border:"1px solid #b1b1b1",
					borderBottom:"1px solid #fff",
					borderTop:"none",
					paddingLeft:"3px",
					paddingRight:"3px",
					backgroundColor:"#fff"
					})
		.find(".dropdownweb").fadeIn();

	}, function() {
		$(this).css({
					backgroundColor:"#f1f1f1",
					border:"none",
					paddingRight:"4px",
					paddingLeft:"4px"
		            })
		.find(".dropdownweb").hide();
	});
})

