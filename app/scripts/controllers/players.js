'use strict';

angular.module('frontendApp')

.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.when('/players', {
    templateUrl: 'views/player-list.html',
    controller: 'PlayerListCtrl'
  });

  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])

.controller('PlayerListCtrl', ['$scope', '$http', '$rootScope',
	function($scope, $http, $rootScope) {
		$http.get($rootScope.serverHost + 'players/').success(function(data) {
			$scope.players = data;
		});

		$scope.createplayer = function() {
			$rootScope.goToState('createplayer');
		}
	}])

.controller('PlayerDetailCtrl', ['$scope', '$routeParams', '$http', '$rootScope',
	function($scope, $routeParams, $http, $rootScope) {
		$http.get($rootScope.serverHost + 'players/' + $routeParams.id + '.json').success(function(data) {
			$scope.player = data;
		});

		$scope.deletePlayer = function() {
			$http.delete($rootScope.serverHost + 'players/' + $routeParams.id).success(function(data) {
				$scope.showSimpleToast('Player deleted!');
				$rootScope.goToState('players')
			});
		}
	}])

.controller('CreatePlayerCtrl', ['$scope', '$http', '$rootScope',
	function($scope, $http, $rootScope) {
		$http.get($rootScope.serverHost + 'teams/').success(function(data) {
			$scope.teams = data;
		});

		$scope.createPlayer = function() {
			// $scope.player.owner = $rootScope.user;
			var obj = JSON.stringify($scope.player);
			console.log("Posting to '" + $rootScope.serverHost	 + 'players/');
			$http.post($rootScope.serverHost + 'players/', obj)
				.success(function() {
					$rootScope.showSimpleToast('Player created!');
					$rootScope.goToState('players');
				});
		};
	}])