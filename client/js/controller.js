
angular.module('app').controller('show2Ctrl',['$scope','Cn_user','User','Cn_type',function($scope,Cn_user,User,Cn_type){
	Cn_user.find().$promise.then(function(result){
		$scope.users = result;
	})
	Cn_type.find().$promise.then(function(result){
		$scope.types = result;
	})
}])
		.controller('addCtrl',['$scope','Cn_user','$state',function($scope,Cn_user,$state){
			$scope.submitForm = function(){
				Cn_user.create({
					id: $scope.user_id,
					name: $scope.user_name
				}).$promise.then(function(){
					$state.go('show')
				})
			}
		}])