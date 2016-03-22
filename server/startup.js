Meteor.startup(function(){
	Accounts.config({forbidClientAccountCreation : false, restrictCreationByEmailDomain : 'harvestministries.faith'});
	
	
})