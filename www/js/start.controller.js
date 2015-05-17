app.controller('startController',
	['$scope', '$state', 
	function($scope, $state){

	$scope.location;
	$scope.useAddress = function(loc){
		$state.go("locate", {address:loc});
	};
	$scope.useMyLocation = function(){
		$state.go("locate");
		//get location data from geolocation service
	};
}]);