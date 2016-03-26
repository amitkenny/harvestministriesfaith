Router.route('/',function(){
  this.render('Home')
})



Router.route('/about',function(){
  this.render('About')
})




Router.route('/contact',function(){
  this.render('Contact')
})

Router.route('/youtube',function(){
	this.redirect('http://j.mp/harvestministriesgoa');
})