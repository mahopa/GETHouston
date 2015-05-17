app.controller('resultController', ['$scope', '$ionicSideMenuDelegate', '$state', 'facilityService', 
	function($scope, $ionicSideMenuDelegate, $state, facilityService){
	$scope.est = [];
	$scope.$on('$ionicView.afterEnter' ,function(){
		var ests = facilityService.getInfo();
		for (var i = ests.length - 1; i >= 0; i--) {
			$scope.est.push(ests[i]);
		};
	});
	$scope.toggleMenu = function(){
		$ionicSideMenuDelegate.toggleLeft();
	};
	$scope.seeDetails = function(biz){
		$state.go("detail", {id:biz.id});
	};
}]);