var app = angular.module('app',['ui.router',
    'lbServices',require('./admin')])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$stateProvider
		.state('show',{
			url: '/show',
			templateUrl: 'views/show.html',
			controller: 'showCtrl'
		})
		.state('add',{
			url: '/add',
			templateUrl: 'views/add.html',
			controller: 'addCtrl'
		})
		.state('admin',{
			url: '/admin',
			templateUrl: 'views/admin/admin.html'
		})
}])
