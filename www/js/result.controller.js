app.controller('resultController', ['$scope', '$ionicSideMenuDelegate',function($scope, $ionicSideMenuDelegate){

	$scope.toggleMenu = function(){
		$ionicSideMenuDelegate.toggleLeft();
	};

}]);