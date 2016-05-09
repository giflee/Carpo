angular.module('app').controller('showCtrl',['$scope','Cn_type','Cn_good','Cn_user',function($scope,Cn_type,Cn_good,Cn_user){
	
	$scope.isShowUserBox = true;
	// 获取所有的物品数据
	Cn_type.find().$promise.then(function(result){
		$scope.types = result;
		$scope.types.forEach(function(item){
			Cn_good.find({filter: {where:{type_id: item.type_id}}}).$promise
			.then(function(data){
					item.goods = data;
			})
		});
	})

	// 首页登录的验证
	$scope.login = function(){
		Cn_user.find({filter: {where: {user_account: $scope.userName}}}).$promise
		.then(function(data){
			if (data[0].user_pass == $scope.password) {
				$scope.current_user = data[0].user_name;
				$scope.isShowUserBox = false;
			}else{
				$scope.loginError = '用户名和密码错误';
			}
		})
	}
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

.controller('needCtrl',['$scope','Cn_need',function($scope,Cn_need){
	Cn_need.find().$promise.then(function(data){
		$scope.needs = data;
	})
}])

.controller('giveCtrl',['$scope','Cn_give',function($scope,Cn_give){
	Cn_give.find().$promise.then(function(data){
		$scope.gives = data;
	})
}])

.controller('exchangeCtrl',['$scope','Cn_exchange',function($scope,Cn_exchange){
	Cn_exchange.find().$promise.then(function(data){
		$scope.exchanges = data;
	})
}])

