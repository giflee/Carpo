var app = angular.module('app.admin',[])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$stateProvider
		.state('app.admin',{
			url: '/admin',
			templateUrl: 'views/admin/index.html',
			template: '<ui-view></ui-view>'
		})
		.state('app.admin.index',{
			url: '/index',
			templateUrl: 'views/admin/admin.html',
		})

}])