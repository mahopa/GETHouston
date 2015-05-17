app.controller('startController',
	['$scope', '$state', 
	function($scope, $state){

	$scope.location;

	$scope.useMyLocation = function(){
		$state.go("locate");
		//get location data from geolocation service
	};
}]);