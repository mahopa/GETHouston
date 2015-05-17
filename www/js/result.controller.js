app.controller('resultController', ['$scope', '$ionicSideMenuDelegate', 'estService', 
	function($scope, $ionicSideMenuDelegate, estService){
	$scope.est = [];
	$scope.$on('$ionicView.afterEnter' ,function(){
		var ests = estService.getInfo();
		for (var i = ests.length - 1; i >= 0; i--) {
			$scope.est.push(ests[i]);
		};
	});
	$scope.toggleMenu = function(){
		$ionicSideMenuDelegate.toggleLeft();
	};

}]);