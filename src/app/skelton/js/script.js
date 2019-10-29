
import $ from 'jquery'; 
import '../css/bootstrap.min.css'
import '../css/styles.css'
import '../css/perfect-scrollbar.css' 

//var ps = new PerfectScrollbar('.menuWrapper');
//var ps1 = new PerfectScrollbar('.contentScroll');
$(document).ready(function() { 
	progressBar();  

	if($(".menuWrapper").length){
		menuWrapperHghtCalc();
		//const ps = new PerfectScrollbar('.menuWrapper');
	}
	if($(".contentScroll").length){
		contentScrollHghtCal();
		//const ps1 = new PerfectScrollbar('.contentScroll');
	}
    $(".menuArrow").on("click", function(){
		if(!$(this).hasClass("menuAct")){
			$(this).addClass("menuAct");
			$("body").addClass("leftMenuAct");
		} else {
			$(this).removeClass("menuAct");
			$("body").removeClass("leftMenuAct");
		}
	});
	
	$("aside").on("mouseenter", function(){
		if($("body").hasClass("leftMenuAct")){
			$("body").addClass("leftMenuActHover");
		}
	}).on("mouseleave", function() {
		$("body").removeClass("leftMenuActHover");
	});
	
	$("#moreBtn").on("click", function(){
		$(".topBar").toggleClass("topBarAct");
	});
	
	$("#mobileMenuBtn").on("click", function(){
		$("aside").toggleClass("asideMobileAct");
	});
	$(".mobileMenuCloseBtn").on("click", function(){
		$("aside").removeClass("asideMobileAct");
	});
	$("#globalSearch").on("click", function(){
		$(".tabBarInput").addClass("tabBarInputAct").focus();
	});
	
	$(".tabBarInput").on("blur", function(){
		if($(this).val()==""){
			$(this).removeClass("tabBarInputAct");
		}
	});
	$("#emailId").on("blur", function(){
		debugger;
	     var email = $("#emailId").val();
	     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	     if (!filter.test(email)) {
	       $("#emailId").addClass('is-invalid');
	       $("#emailId").removeClass('is-valid');
	       //email.focus;
	    } else {
	    	$("#emailId").removeClass('is-invalid');
	    	$("#emailId").addClass('is-valid');
	    }

	 });
	 
	 $(".input-group .form-control").on("focus", function(){
		 $(this).closest(".input-group").addClass("input-groupFocus");
	 });
	 
	 $(".input-group .form-control").on("blur", function(){
		 $(this).closest(".input-group").removeClass("input-groupFocus");
	 });

	$('#mobileNumber1').add('#mobileNumber2, #pincode').keypress(function(event){
        if(event.which != 8 && isNaN(String.fromCharCode(event.which))){
            event.preventDefault();
        }
    });
	
	$(".hasSubmenu").on("click", function(){
		$(this).toggleClass("subMenuAct");
		$(this).find("ul").slideToggle();
	});
	
	$("#loginBtn").on("click", function(){
		window.location.href = 'investment.html';
	});
	
	$("#signoutBtn").on("click", function(){
		window.location.href = 'index.html';
	});

	/*$('.form-group').find('input').on("blur", function(){
		var thisEle = $(this);
		(thisEle.val().length === 0) ? thisEle.addClass('is-invalid') : thisEle.removeClass('is-invalid');
	});

	$('.form-group').find('select').on('blur', function(){
		var thisEle = $(this);
		(thisEle.val() == 'Select') ? thisEle.addClass('is-invalid') : thisEle.removeClass('is-invalid');
	});*/

	
}); 
 
$(window).resize(function(){
	//progressBar();
    menuWrapperHghtCalc();
	contentScrollHghtCal();
	//ps.update();
	//ps1.update();
});

function menuWrapperHghtCalc(){
	var menuWrapperHght = $(window).height() - $(".logoWrap").outerHeight() - 10;
	$(".menuWrapper").css("height", menuWrapperHght);
}
function contentScrollHghtCal(){
	var contentScroltHght = $(window).height() - ( $(".contentScroll").offset().top + $("footer").outerHeight() + 45);
	$(".contentScroll").css("max-height", contentScroltHght);
}
function progressBar(){   
	if($(".progressBarWrap").length){ 
		var listWidth = $(".progressBarWrap").outerWidth();
		var listItemLen = $(".progressBarWrap li").length;
		var listSpacer = ( listWidth - ( listItemLen * 36 ) ) / ( listItemLen * 2);
		$(".progressBarWrap li").css({"margin": "0 "+listSpacer+"px"});
		$(".leftspaceRemover, .rightSpaceRemover").css({"width": listSpacer+"px"});
		$(".stageSpacer").css({"width": (( listSpacer * 2 ) + 3 )+"px"});
	}
}