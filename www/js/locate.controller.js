app.controller("locateController",
	['$scope', '$state', '$stateParams', '$timeout', 'facilityService', 
		function($scope, $state, $stateParams, $timeout, facilityService){

	$scope.$on('$ionicView.afterEnter' ,function(){
		if(!$stateParams.address){
			navigator.geolocation.getCurrentPosition(function(position){
				$scope.location = "lat="+position.coords.latitude+"&lng="+position.coords.longitude;
				//$scope.location = "Your location";
				facilityService.getByLatLong($scope.location, function(){
					$state.go('result');
				});			
			});
		}
		else{
			facilityService.getByAddress($stateParams.address, function(){
				$state.go('result');
			});
		}
	});
	$scope.location = $stateParams.loc;
}]);