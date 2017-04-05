var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
	//set up routes
	$routeProvider
		.when('/', {
			templateUrl: 'views/index.html'
		})
		.when('/aboutMe', {
			templateUrl: 'views/aboutMe.html'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html'
		})
		.when('/keenDiamonds', {
			templateUrl: 'views/keenDiamonds.html'
		})
		.when('/masCakes', {
			templateUrl: 'views/masCakes.html'
		})
		.when('/djRock', {
			templateUrl: 'views/djRock.html'
		})
		.when('/blockChain', {
			templateUrl: 'views/blockChain.html'
		})
		.when('/theInternship', {
			templateUrl: 'views/theInternship.html'
		})
		.when('/ATXHack4Change', {
			templateUrl: 'views/ATXHack4Change.html'
		})
		.when('/cars', {
			templateUrl: 'views/cars.html'
		})
		.when('/VeteransAffairsHackathon', {
			templateUrl: 'views/VeteransAffairsHackathon.html'
		})
		.when('/dreamCalculator', {
			templateUrl: 'views/dreamCalculator.html'
		})
		.when('/galvanizeHackathon', {
			templateUrl: 'views/galvanizeHackathon.html'
		})
		.otherwise('/', {
			templateUrl: 'views/index.html'
		})
})