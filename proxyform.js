if (Meteor.isClient) {
	//Accounts related
	Template.login.events({
		'submit form': function(event){
			event.preventDefault();
			var email = $('[name=email]').val();
			var password = $('[name=password]').val();

			Meteor.loginWithPassword(email, password, function(error) {
				if(error){
			        console.log(error.reason); // Output error when the login fails
			    } else {
			    	Router.go("admin"); // Redirect user when login succeeds	
			    }
			});
		}
	});

	Template.navigation.events({
	    'click .logout': function(event){
	        event.preventDefault();
	        Meteor.logout(); //logout function
	        Router.go('page1'); //route back to login
	    }
	});	

	//Initialize selection dropdown
	Template.section1.onRendered(function() {
		$('select').material_select()
	});

  //not in use currently
	  Template.section2.onRendered(function() {
  	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
	});
  });

  //store data in session
  Template.page1.events({
  	'click #nextpage': function(){
  		Session.set('address', $('[name="address"]').val());
  		Session.set('unitnum', $('[name="unitnum"]').val());
  		Session.set('candidate', $('[name="candidate"]').val());
  		Session.set('proxyname', $('[name="proxyname"]').val());
  	}
  });

  //confirmation page submit
  Template.page2.events({
  	'click #submit': function(){
  		var address = Session.get('address');
  		var unitnum = Session.get('unitnum');
  		var candidate = Session.get('candidate');
  		var proxyname = Session.get('proxyname');
  		var owner_name = $('[name="owner_name"]').val();
  		var email = $('[name="email"]').val();

		//test
		console.log(address)
		console.log(unitnum)
		console.log(candidate)
		console.log(proxyname)
		console.log(owner_name)
		console.log(email)

		//Insert to DB
		proxyEntry.insert({
			address: address,
			unitnum: unitnum,
			candidate: candidate,
			proxyname: proxyname,
			owner_name: owner_name,
			email: email,
			createdAt: new Date()
		}, function(error){
			if(error){
		        console.log(error.reason); // Output error if submission fails
		    } else {
		        Router.go("success"); // Redirect user if submission succeeds
		    }
		});
	}
});

  //fields in legal text, will change later
  Template.confirmation.helpers({
  	'address': function(){
  		return Session.get('address')
  	},
  	'unitnum': function(){
  		return Session.get('unitnum')
  	},
  	'candidate': function(){
  		return Session.get('candidate')
  	},
  	'proxyname': function(){
  		return Session.get('proxyname')
  	}
  });

}

if (Meteor.isServer) {

}
