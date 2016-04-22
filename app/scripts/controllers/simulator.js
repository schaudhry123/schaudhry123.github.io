'use strict';

angular.module('frontendApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/simulator', {
    templateUrl: 'views/simulator.html',
    controller: 'SimCtrl'
  });
}])

.controller('SimCtrl', ['$scope', '$http', '$rootScope',
	function($scope, $http, $rootScope) {
		// $scope.team1_id;
		// $scope.team2_id;
		$scope.team1;
		$scope.team2;

		$http.get($rootScope.serverHost + 'teams/').success(function(data) {
			$scope.teams = data;
		});

		$scope.searchTerm1;
		$scope.searchTerm2;

		$scope.clearSearchTerm = function() {
			$scope.searchTerm1 = '';
			$scope.searchTerm2 = '';
		};

		$scope.simulate = function(team1, team2) {
			if (!team1 || !team2) {
				$scope.showSimpleToast('Enter both teams!');
				return false;
			}
			$scope.dataLoaded = false;
			console.log($rootScope.serverHost + 'teams/getSimulation/' + team1.id + '/' + team2.id);
			$http.get($rootScope.serverHost + 'teams/getSimulation/' + team1.id + '/' + team2.id).success(function(data) {
				$scope.winning_team = data['winning_team'];
				$scope.winning_score = data['winning_score'];
				$scope.winning_scorers = data[$scope.winning_team];
				$scope.losing_team = data['losing_team'];
				$scope.losing_score = data['losing_score'];
				$scope.losing_scorers = data[$scope.losing_team];
				$scope.winning_scoring_players = [];
				console.log("Winners!");
				for (var key in $scope.winning_scorers) {
					if ($scope.winning_scorers.hasOwnProperty(key)) {
						console.log(key + ' - ' + $scope.winning_scorers[key]);
						$scope.winning_scoring_players.push(key);
					}
				}
				console.log("Losers!");
				$scope.losing_scoring_players = [];
				for (var key in $scope.losing_scorers) {
					if ($scope.losing_scorers.hasOwnProperty(key)) {
						console.log(key + ' - ' + $scope.losing_scorers[key]);
						$scope.losing_scoring_players.push(key);
					}
				}
				$scope.dataLoaded = true;
			});
		}
	}])