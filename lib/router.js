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

Router.route('/success', {
	name: 'success', //leave this while
 	template: 'success' //switching templates
});

Router.route('/login', {
	name: 'login', //leave this while
 	template: 'login' //switching templates
});

Router.route('/admin', {
	name: 'admin', //leave this while
 	template: 'admin' //switching templates
});