angular.module('app').controller('showCtrl',['$scope','Cn_user',function($scope,Cn_user){
	Cn_user.find().$promise.then(function(result){
		$scope.users = result;
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