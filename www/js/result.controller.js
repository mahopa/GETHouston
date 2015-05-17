app.controller('resultController', 
	['$scope', '$ionicSideMenuDelegate', '$state', 'facilityService', 'yelpAPI', 
	function($scope, $ionicSideMenuDelegate, $state, facilityService, yelpAPI){
	$scope.est = [];
	$scope.$on('$ionicView.afterEnter' ,function(){
		var ests = facilityService.getInfo();
		for (var i = ests.length - 1; i >= 0; i--) {
			$scope.est.push(ests[i]);
		};
	});
	$scope.toggleLeft = function(){
		$ionicSideMenuDelegate.toggleLeft();
	};
	$scope.seeDetails = function(biz){
		$state.go("detail", {id:biz.Id});
	};
	$scope.getYelp = function(biz){
		if(biz.Yelp || !biz.Phone){
			return;
		}
		else{
			yelpAPI.getBusinessInfo(biz.Phone, function(result){
				if(result.businesses.length > 0){
					biz.Yelp = result.businesses[0];
				}
				console.log(biz);
			});
		}
	}
}]);