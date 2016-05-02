angular.module('app').controller('showCtrl',['$scope','Cn_type','Cn_good',function($scope,Cn_type,Cn_good){
	
	//获取所有的物品数据
	Cn_type.find().$promise.then(function(result){
		$scope.types = result;
		$scope.types.forEach(function(item){
			Cn_good.find({filter: {where:{type_id: item.type_id}}}).$promise
			.then(function(data){
					item.goods = data;
			})
		});
	})

	// $scope.showDetial = function(param_id){
	// 	Cn_good.find({filter: {where: {id: param_id}}}).$promise
	// 	.then(function(data){
	// 		$scope.good = data;
	// 	})
	// }
}])

.controller('detailsCtrl',['$scope','Cn_good','$stateParams',function($scope,Cn_good,$stateParams){
	Cn_good.find({filter: {where: {id: $stateParams.id}}}).$promise
	 	.then(function(data){
	 		$scope.gooditem = data[0];
	 	})
}])

