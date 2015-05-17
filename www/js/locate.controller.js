app.controller("locateController",
	['$scope', '$state', '$stateParams', '$timeout', 
		function($scope, $state, $stateParams, $timeout){
	$scope.$on('$ionicView.afterEnter' ,function(){
		$timeout(function() {
			$state.go('result');
		}, 2500);
	})
	$scope.location = $stateParams.loc;
}]);