$(document).ready(function(){
	$('.bxslider').bxSlider();


	var curr = 1;
	var total = $('.slide-item').length;
	toggleBima(curr);

	$('.first-slide').addClass('slide-active');
	$('.bx-next').click(function(){
		if(curr == total){
			curr = 1
		}
		else {
			curr++;
		}
		$('.slide-active').removeClass('slide-active');
		$('#slide-'+curr).addClass('slide-active');
		changeScreen(curr);
		toggleBima(curr);
		toggleBimaSmall(curr);
	});
	$('.bx-prev').click(function(){
		if(curr == 1){
			curr = total
		}
		else {
			curr--;
		}
		$('.slide-active').removeClass('slide-active');
		$('#slide-'+curr).addClass('slide-active');
		changeScreen(curr);
		toggleBima(curr);
		toggleBimaSmall(curr);
	});
	$('.bx-controls').on('click',function(){
		var active = parseInt($(this).find('.active').attr('data-slide-index')) + 1;
		$('.slide-active').removeClass('slide-active');
		$('#slide-'+active).addClass('slide-active');
		changeScreen(active);
		toggleBima(active);
		toggleBimaSmall(active);
	});

	function changeScreen(curr){
		if(curr == 2 || curr == 1){
			curr = 1;
		}
		var margin = parseInt($('#view-'+curr).attr('data-margin'));
		$('#device .slide').css({'margin-left':margin+'px'})
	}

	function toggleBima(curr){
		if(curr == 1){
			$('#bima').animate({
				top:"300px",
				opacity:1
			}, 500);
			$('#bima').animate({
				top:"260px",
				opacity:1
			}, 510);
		}
		else {
			$('#bima').animate({
				top:"100px",
				opacity:0
			}, 500);
		}
	}

	function toggleBimaSmall(curr){
		if(curr == 2){
			$('#bima-small').animate({
				right:"225px",
				opacity:1
			}, 500);
		}
		else {
			$('#bima-small').animate({
				right:"100px",
				opacity:0
			}, 500);
		}
	}

	function toggleVideo(){
		var idvideo = $('#iframe-video-mobile').attr('src');
		$('#toggle-video').click(function(){
			$('#iframe-video-mobile').show();
			$('#iframe-video-mobile').attr('src',idvideo);
			$('#overlay').show();
		});
		$('#overlay').click(function(){
			$('#iframe-video-mobile').hide();
			$('#iframe-video-mobile').attr('src',"");
			$('#overlay').hide();
		});
	}
	toggleVideo();

	function resizeVideo(){
		var width = $('#iframe-video-mobile').outerWidth();
		var height = $('#iframe-video-mobile').outerHeight();
		$('#iframe-video-mobile').css({
			'margin-left' : -width/2 + 'px',
			'margin-top' : -height/2 + 'px'
		});
	}
	resizeVideo();

	$(window).resize(function(){
		resizeVideo();
	})

	var uagent = navigator.userAgent.toLowerCase();
	function DetectIphone(){
	   if (uagent.search("iphone") > -1){
	   		$('.download-iphone').show();
	   }
	   else if (uagent.search("ipad") > -1){
	   		$('.download-iphone').show();
	   }
	   else if (uagent.search("android") > -1){
	   		setTimeout(function(){window.location=" https://play.google.com/store/apps/details?id=com.linkit.bimatri&referrer=utm_source%3Dbimaweb"},2000);
	   		$('.download-android').show();
	   }
	   else if (uagent.search("blackberry") > -1){
	   		$('.download-blackberry').show();
	   }
	   else {
	   		$('.download a').show();
	   }
	}
	DetectIphone();

	$('.download').clone().appendTo('.clone-download');

	console.log("Haaai");
	console.log("satatus");
	console.log(HTTP.status);

	$.ajax({
	 statusCode: {
	  404: function() {
	    console.log("Not Foound");
	  }
	 }
	});

	// window.addEventListener('error', function(e) {
	//     console.log(e);
	// }, true);

	// var url = 'http://bima.tri.co.id/product?id=64267&action=buy';
	// function UrlExists(url) {
	//     var http = new XMLHttpRequest();
	//     http.open('HEAD', url, false);
	//     http.send();
	//     if (http.status != 404){
	//         //  do something
	//     }
	//     else{
	//         console.log("ERrror");
	//     }
	// }
});
