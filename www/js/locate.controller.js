app.controller("locateController",
	['$scope', '$state', '$timeout', '$stateParams', 
		function($scope, $state, $timeout, $stateParams){
	/*$scope.loading = function(){
		$timeout(function() {
			$state.go('/result');
		}, 500);
	}*/
	$scope.location = $stateParams.loc;
	console.log(JSON.stringify($stateParams));
}]);