
lScope = "";
translate = "";

(function() {
	'use strict';

	angular
		.module('app.login')
		.controller('LoginCtrl', LoginController);
	
	LoginController.$inject = ["$scope", "$ionicScrollDelegate", "$timeout", "Auth", "$translate", "$ionicPlatform", "$state"];

	function LoginController($scope, $ionicScrollDelegate, $timeout, Auth, $translate, $ionicPlatform, $state) {
		
		lScope = $scope;
		translate = $translate;
		
		$scope.hideHeaderBarForCurrentView($scope);
		
		$("#languageOptn").unbind("change").change(function() {
			var preferredLang = $(this).val();
			$scope.changeLanguage(preferredLang);
		});
		
		$scope.googlePlusAvailable = false;
		
	  	$('#password').keypress(function(e) {
	  	    if (e.which == '13') {
	  	    	$scope.authenticateUser();
	  	    }
	  	});

		$scope.authenticateUser = function() {
			
			var userId = $("#username").val();
			var password = $("#password").val();

			if (userId.trim() == "" || password.trim() == "") {
				$scope.showAlert($scope.getMessage("loginFailTitle"), $scope.getMessage("invalidUsernamePasswordMessage"));
				return;
			}
			else {
				$scope.showLoadingIndicator($scope.getMessage("loggingInMessage"));
				$timeout(function(){
					Auth.loginUser(); 
					$scope.hideLoadingIndicator();
					$state.go('app.view.dashboard');
				}, 1000);
			}		
		};
	
		$("#username").val("tester");
		$("#password").val("password");

	}
})();