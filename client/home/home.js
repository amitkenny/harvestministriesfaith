Template.Home.onRendered(function(){
  $(".button-collapse").sideNav();

  $('.parallax').parallax();
  
  $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });

})
