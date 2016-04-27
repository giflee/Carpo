angular.module('app').controller('showCtrl',['$scope','Cn_type','Cn_good',function($scope,Cn_type,Cn_good){
	Cn_type.find().$promise.then(function(result){
		$scope.types = result;
		$scope.types.forEach(function(item){
			Cn_good.find({filter: {where:{type_id: item.type_id}}}).$promise
			.then(function(data){
					item.goods = data;
			})
		});
	})
}])