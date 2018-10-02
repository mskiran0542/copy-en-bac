$(document).on("scroll", function(){
	if ($(document).scrollTop() > 70){
		$("header").addClass("fxg-header--shrunk");
	} else {
		$("header").removeClass("fxg-header--shrunk");
	}
});


$(document).ready(function(){
	//$("#openaccount").modal({show: false, backdrop: "static"});
	
	$(".help-icon").click(function(){
		if($(".help-icon").hasClass('close-icon')){
			$(this).find("img").attr("src","../../assets/images/icon-help.svg");
			$(".help-icon").attr("class","help-icon");			
		}else{			
			$(this).find("img").attr("src","../../assets/images/icon-close.svg");
			$(".help-icon").attr("class","help-icon close-icon");
		}		
		$(this).next(".help-text").slideToggle();
	});


	// $("#acc-menuScroll1").click(function() {
	// 	$('html,body').animate({
	// 	scrollTop: $("#acc-menu1").offset().top},
	// 	'slow');
	// });

	$("#acc-menuScroll1").click(function() {		
		setTimeout(function(){ $('html,body').animate({			
		scrollTop: $("#acc-menu1").offset().top-100},
		'slow'); }, 500);
	});
	$("#acc-menuScroll2").click(function() {
		setTimeout(function(){ $('html,body').animate({			
		scrollTop: $("#acc-menu2").offset().top-100},
		'slow'); }, 500);
	});
	$("#acc-menuScroll3").click(function() {
		setTimeout(function(){ $('html,body').animate({			
		scrollTop: $("#acc-menu3").offset().top-100},
		'slow'); }, 500);
	});

	$('#feedback-submit').click(function(){
		$("#feedback-form").hide();
		$("#thankyou-msg").show();
	});

});


function add(ths,sno){
	$('#hide-box').show();
	for (var i=1;i<=5;i++){
		var cur=document.getElementById("star"+i)
		cur.className="starrating"
	}
	
	for (var i=1;i<=sno;i++){
		var cur=document.getElementById("star"+i)
		if(cur.className=="starrating")
		{
		cur.className="starrating checked"
		}
	}
	
}