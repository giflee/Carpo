angular.module('app').controller('adminCtrl',['$scope','Cn_user',function($scope,Cn_user){
	Cn_user.find().$promise.then(function(result){
		$scope.users = result;
	})
	console.log('1');
}])