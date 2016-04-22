'use strict';

angular.module('frontendApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teams', {
    templateUrl: 'views/team-list.html',
    controller: 'TeamListCtrl'
  });
}])

.controller('TeamListCtrl', ['$scope', '$http', '$rootScope',
	function($scope, $http, $rootScope) {
		$http.get($rootScope.serverHost + 'teams/').success(function(data) {
			$scope.teams = data;
		});
	}])

.controller('TeamDetailCtrl', ['$scope', '$routeParams', '$http', '$rootScope',
	function($scope, $routeParams, $http, $rootScope) {
		$http.get($rootScope.serverHost + 'teams/' + $routeParams.id + '.json').success(function(data) {
			$scope.team = data;
			$scope.players = $scope.team['players'];
		});
	}]);