app.controller("locateController",
	['$scope', '$state', '$stateParams', '$timeout', 'estService', 
		function($scope, $state, $stateParams, $timeout, estService){
	$scope.$on('$ionicView.afterEnter' ,function(){
		estService.pullInfo($stateParams.loc);
		$timeout(function() {
			$state.go('result');
		}, 2500);
	});
	$scope.location = $stateParams.loc;
}]);