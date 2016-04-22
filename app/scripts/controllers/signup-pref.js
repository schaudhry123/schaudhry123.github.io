'use strict';

angular.module('frontendApp')

.controller('signupPrefCtrl', function($http, $rootScope, $scope) {
	$scope.user = $rootScope.user;
  $scope.user.user_amenity = {};
  $scope.user.house_amenity_bool = true;

  $scope.user.smoking = 3;
  $scope.user.environment = 3;
  $scope.user.condition = 3;
  $scope.user.belongings = 3;
  $scope.user.guests = 3;
  $scope.user.sleep = 3;

	$scope.updateUser = function() {
    $http
      .post(
        $rootScope.serverHost + 'users/newUser/',
        $scope.user
      )
      .then(function(response) {
        $rootScope.user = response.data;
        $rootScope.showSimpleToast('Welcome!');
        $rootScope.goToState('overview');
      });
	};
});
