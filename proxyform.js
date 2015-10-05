if (Meteor.isClient) {


  Template.section1.onRendered(function() {
      $('select').material_select()
  });

  Template.section2.onRendered(function() {
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  });
}

if (Meteor.isServer) {

}
