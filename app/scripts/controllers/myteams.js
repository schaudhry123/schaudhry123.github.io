'use strict';

angular.module('frontendApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myteams', {
    templateUrl: 'views/myteams.html',
    controller: 'MyTeamsCtrl'
  });
}])

.controller('MyTeamsCtrl', ['$scope', '$http', '$rootScope',
	function($scope, $http, $rootScope) {
		$scope.owner = $rootScope.user;
		console.log($scope.owner);

		$http.get($rootScope.serverHost + 'teams/').success(function(data) {
			$scope.teams = data;
		});

		$scope.createteam = function() {
			$rootScope.goToState('createteam');
		}
	}]);