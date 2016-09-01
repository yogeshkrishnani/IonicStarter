(function() {
	'use strict';

	angular
		.module('app.dashboard')
		.controller('dashboardController', DashboardController);
		
	DashboardController.$inject = ["$scope", "Auth"];

	function DashboardController($scope, Auth) {
		
		$scope.goToDemoPage = function() {
			$scope.showNextPage('app.view.demo');  
		};
	}
})();