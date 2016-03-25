Template.Home.onRendered(function(){
  $(".button-collapse").sideNav();

  $('.parallax').parallax();
  
  $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
	  
	$('.home-carousel').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	})
	
	$('.proclamations-carousel').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	})
	
	$('.modal-trigger').leanModal();

})
