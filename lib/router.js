Router.configure({
    layoutTemplate: 'main'
});

//default page
Router.route('/', {
	name: 'page1', //leave this while
 	template: 'page1' //switching templates
});

Router.route('/page2', {
	name: 'page2', //leave this while
 	template: 'page2' //switching templates
});