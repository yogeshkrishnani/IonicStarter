
(function() {
	"use strict";

	angular.module("app").config(function($stateProvider, $urlRouterProvider, $compileProvider) {
		
		console.log("In app.route");
		
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sms|file):/);
		
		$stateProvider.state("app.view.dashboard", {
			url : "/dashboard",
			views : {
				"content" : {
					templateUrl : "app/modules/dashboard/dashboard.html",
					controller : "dashboardController"
				}
			}
		});
		
		$stateProvider.state("app.view.demo", {
			url : "/demo",
			views : {
				"content" : {
					templateUrl : "app/modules/demo/demo.html",
					controller : "demoController"
				}
			}
		});
		
		if( !config.useLogin ) {
			$urlRouterProvider.otherwise('/app/view/dashboard');
		}
        
	}).run(function ($rootScope, $state, $stateParams, $ionicPlatform, Auth) {
		if( !config.useLogin ) {
			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
				if (toState.url != "/dashboard" && fromState.views == null) {
					event.preventDefault();
					$state.go('app.view.dashboard');
				}
			});
		}
	});
})();