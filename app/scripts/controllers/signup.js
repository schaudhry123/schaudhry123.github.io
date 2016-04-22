'use strict';

angular.module('frontendApp')

.controller('signupCtrl', function($http, $rootScope, $scope) {
  $scope.user = $rootScope.user;

  $scope.updateUser = function() {
    $rootScope.user = $scope.user;
    $rootScope.goToState('signup_pref');
  };
});
  