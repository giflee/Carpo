var app = angular.module('app',['ui.router',
    'lbServices'])
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
}])
