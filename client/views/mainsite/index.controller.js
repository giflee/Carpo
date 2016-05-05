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
}])

.controller('detailsCtrl',['$scope','Cn_good','$stateParams','Cn_comments','$state',function($scope,Cn_good,$stateParams,Cn_comments,$state){
	Cn_good.find({filter: {where: {id: $stateParams.id}}}).$promise
	 	.then(function(data){
	 		$scope.gooditem = data[0];
	 		Cn_comments.find({filter: {where: {good_id: data[0].id}}}).$promise
	 		.then(function(result){
	 			$scope.comments = result;
	 		})
	 	})
	 
	 $scope.addComment = function(gooditem){
	
	 	Cn_comments.create({
	 		id: 0,
	 		user_name: $scope.userName,
	 		email: $scope.email,
	 		message: $scope.comment,
	 		good_id: gooditem.id,
	 		user_id: gooditem.owner_id
	 	}).$promise.then(function(result){
	 		$scope.comments.push(result);
	 	})
	 }
}])

