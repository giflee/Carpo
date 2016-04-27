angular.module('app').controller('typeCtrl',['$scope','Cn_type','$uibModal',function($scope,Cn_type,$uibModal){

	Cn_type.find().$promise.then(function(result){
		$scope.types = result;
	})

	$scope.openModal = function(){
		$uibModal.open({
			templateUrl: '/views/admin/type/addType.html',
			size:'md'
		})
	}
	
}])