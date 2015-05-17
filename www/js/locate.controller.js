app.controller("locateController", function($scope, $state, $timeout){
	$scope.loading = function(){
		$timeout(function() {
			$state.go('/result');
		}, 500);
	}
});