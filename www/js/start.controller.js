app.controller('startController',
	['$scope', '$state', 
	function($scope, $state){

	$scope.location;

	$scope.useMyLocation = function(){
		//get location data from geolocation service
		navigator.geolocation.getCurrentPosition(function(position){
			$scope.location = "lat="+position.coords.latitude+"&lng="+position.coords.longitude;
			//$scope.location = "Your location";
			$state.go("locate",{loc:$scope.location});
		});
	};
}]);