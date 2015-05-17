app.controller('startController', function($scope, $state){

	$scope.location;

	$scope.useMyLocation = function(){
		//get location data from geolocation service
		navigator.geolocation.getCurrentPosition(function(position){
			$scope.location = "Your location";
			$state.go("locate");
		});
		}
	};
});