var app = angular.module('app',['ui.router',
    'lbServices','ngAnimate','ui.bootstrap'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$stateProvider
		.state('show',{
			url: '/show',
			templateUrl: 'views/mainsite/index.html',
			controller: 'showCtrl'
		})
		.state('admin',{
			url: '/admin',
			templateUrl: 'views/admin/admin.html'
		})
		.state('admin.main',{
			url: '/main',
			templateUrl: 'views/admin/main.html'
		})
		.state('admin.type',{
			url: '/type',
			templateUrl: 'views/admin/type/type.html',
			controller: 'typeCtrl'
		})
}])
