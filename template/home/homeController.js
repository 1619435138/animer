angular.module('app')
	.controller('homeController', ['$state', '$scope', function ($state, $scope) {
		$scope.goStateName = function (stateName, params) {
			$state.go(stateName, params);
		}
		
		//$state.go('start');  //  重定向

	}])