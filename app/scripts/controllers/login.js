'use strict';

angular.module('frontendApp')

.controller('loginCtrl', function($http, $rootScope, $scope) {
    // Log a user in
    $scope.login = function() {

      if (!$scope.user || !$scope.user.name || !$scope.user.password) {
        $rootScope.showSimpleToast('Invalid login');
        return;
      }

      $http.get($rootScope.serverHost + 'users/').then(function(response) {
        var users = response.data;
        //$scope.user.name
        if (users.length !== 1) {
          $rootScope.showSimpleToast('Invalid login');
        } else {
          var found = false;
          for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user['username'].localeCompare($scope.user.name) == 0) {
              $rootScope.showSimpleToast('Welcome!');
              $rootScope.user = user['username'];
              $rootScope.user_id = user['id'];
              found = true;

              $rootScope.goToState('overview');
              break;
            }
          }
          if (!found)
            $rootScope.showSimpleToast('No matching username found');
        }
      });
    };

    $scope.signup = function() {
      if (!$scope.user || !$scope.user.name || !$scope.user.password) {
        $rootScope.showSimpleToast('Invalid user');
        return;
      }

      $rootScope.user = $scope.user;
      $rootScope.goToState('signup');
    };
  });
