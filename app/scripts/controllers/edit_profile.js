'use strict';

angular.module('frontendApp')

.controller('editProfileCtrl', function($http, $rootScope, $scope) {
  $scope.user = $rootScope.user;

  $scope.updateUser = function() {
    $http
      .put(
        $rootScope.serverHost + 'users/updateUser/' + $rootScope.user.id + '/',
        $scope.user
    )
    .then(function(response) {
      $rootScope.user = response.data;
      $rootScope.showSimpleToast('Profile updated!');
      $rootScope.goToState('overview');
    });
  };
});
  