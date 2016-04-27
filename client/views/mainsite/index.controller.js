angular.module('app').controller('showCtrl',['$scope','Cn_type',function($scope,Cn_type){
	Cn_type.find().$promise.then(function(result){
		$scope.types = result;
	})
}])