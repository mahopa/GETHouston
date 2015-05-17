app.controller("locateController",
	['$scope', '$state', '$stateParams', '$timeout', 'estService', 
		function($scope, $state, $stateParams, $timeout, estService){
	$scope.$on('$ionicView.afterEnter' ,function(){
		navigator.geolocation.getCurrentPosition(function(position){
			$scope.location = "lat="+position.coords.latitude+"&lng="+position.coords.longitude;
			//$scope.location = "Your location";
			estService.pullInfo($scope.location, function(){
				$state.go('result');
			});			
		});
	});
	$scope.location = $stateParams.loc;
}]);