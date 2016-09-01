/* Application Controller - IONIC
 * 
 * @Contributors
 * Yogesh Krishnani
 *
 * @Version
 * 1.0
 *
 */
 
appScope = "";

(function() {
    'use strict';
    
	angular.module(config.applicationModuleName).controller('appCtrl',['$scope' , function($scope) {
	
		console.log("in appCrl");
		
		appScope = $scope;
	
	}]);

})();