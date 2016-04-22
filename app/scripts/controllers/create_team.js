'use strict';

var app = angular.module('frontendApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/createteam', {
    templateUrl: 'views/create_team.html',
    controller: 'CreateTeamCtrl'
  });
}])

.controller('CreateTeamCtrl', ['$scope', '$http', '$rootScope',
	function($scope, $http, $rootScope, $element) {
		$scope.recommendedPlayers = [];
		$scope.recommendType = 'Scoring';

		$http.get($rootScope.serverHost + 'players/').success(function(data) {
			$scope.players = data['results'];
		});

		// $scope.playersSelected = [];
		$scope.toggle = function (player, list) {
			console.log('toggle: ' + list);
			if (!list) {
				$scope.team.players = [];
				$scope.team.players.push(player);
			}
			else {
				var idx = list.indexOf(player);
				if (idx > -1) {
					console.log("Removing");
					$scope.team.players.splice(idx, 1);
				}
				else {
					$scope.team.players.push(player);
				}
			}
		};

		$scope.exists = function (player, list) {
			if (list) {
				console.log('exists: ' + list);
				return list.indexOf(player) > -1;
			}
		};

		$scope.searchTerm;

		$scope.clearSearchTerm = function() {
			$scope.searchTerm = '';
		};

		$scope.createTeam = function() {
			// $scope.team.owner = $rootScope.user;
			console.log("Posting " + JSON.stringify($scope.team));
			$http.post($rootScope.serverHost + 'teams/', $scope.team)
				.then(function() {
					$rootScope.showSimpleToast('Team created!');
					$rootScope.goToState('teams');
				});
		};

		$scope.filterAlreadyAdded = function(item) {
			if ($scope.team && $scope.team.players)
				return ($scope.team.players.indexOf(item) == -1);
			return true;
		};

		$scope.$watch('team.players', function(newValue, oldValue) {
			// self.ngModel.$render();
			// angular.element('selectdemoSelectHeaderId').controller('ngModel').$render();
			// console.log(newValue);
			if ($scope.team) {
				$scope.team.players = newValue;
				var forwards = 0;
				var defenders = 0;
				var midfielders = 0;
				var goalkeepers = 0;
				for (var i = 0; i < newValue.length; i++) {
					var player = $scope.team.players[i];
					switch (player['position']) {
						case 'Forward': forwards++;
						break;

						case 'Defender': defenders++;
						break;

						case 'Midfielder': midfielders++;
						break;

						case 'Keeper': goalkeepers++;
						break;
					}
				}
				console.log(forwards + ', ' + defenders + ', ' + midfielders + ', ' + goalkeepers);

				if (forwards == 0) {
					$scope.recommendType = 'Scoring';
				}
				else if (midfielders == 0) {
					$scope.recommendType = 'Passing';
				}
				else if (defenders == 0) {
					$scope.recommendType = 'Defending';
				}
				else if (goalkeepers == 0) {
					$scope.recommendType = 'Goalkeeping';
				}
				else {
					var rand = Math.floor((Math.random() * 4) + 1);
					switch (rand) {
						case 1: $scope.recommendType = 'Scoring';
						break;

						case 2: $scope.recommendType = 'Passing';
						break;

						case 3: $scope.recommendType = 'Defending';
						break;

						case 4: $scope.recommendType = 'Goalkeeping';
						break;
					}
				}

			}
		});

	}]);