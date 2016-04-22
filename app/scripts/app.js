'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html'
      })
      .when('/houses', {
        templateUrl: 'views/house_search.html',
        controller: 'houseSearchCtrl'
      })
      .when('/new_house', {
        templateUrl: 'views/new_house.html',
        controller: 'newHouseCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'signupCtrl'
      })
      .when('/signup_pref', {
        templateUrl: 'views/signup-pref.html',
        controller: 'signupPrefCtrl'
      })
      .when('/edit_profile', {
        templateUrl: 'views/edit_profile.html',
        controller: 'editProfileCtrl'
      })
      .when('/edit_house', {
        templateUrl: 'views/edit_house.html',
        controller: 'editHouseCtrl'
      })
      .when('/roommates', {
        templateUrl: 'views/roommates.html',
        controller: 'roommatesCtrl'
      })
       .when('/players', {
        templateUrl: 'views/player-list.html',
        controller: 'PlayerListCtrl'
      })
      .when('/players/:id', {
        templateUrl: 'views/player-detail.html',
        controller: 'PlayerDetailCtrl'
      })
      .when('/teams', {
        templateUrl: 'views/team-list.html',
        controller: 'TeamListCtrl'
      })
      .when('/teams/:id', {
        templateUrl: 'views/team-detail.html',
        controller: 'TeamDetailCtrl'
      })
      .when('/simulator', {
        templateUrl: 'views/simulator.html',
        controller: 'SimCtrl'
      })
      .when('/createteam', {
        templateUrl: 'views/create_team.html',
        controller: 'CreateTeamCtrl'
      })
      .when('/createplayer', {
        templateUrl: 'views/create_player.html',
        controller: 'CreatePlayerCtrl'
      })
      .when('/myteams', {
        templateUrl: 'views/myteams.html',
        controller: 'MyTeamsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('appCtrl', function($http, $location, $mdToast, $rootScope) {

    $rootScope.serverHost = 'http://ultimate-team-rest-api.herokuapp.com/';
    // $rootScope.serverHost = 'http://127.0.0.1:8000/';

    // Check if the user is logged in
    if (!$rootScope.user) {
      $location.path('/');
    }

    // Change pages
    $rootScope.goToState = function(state) {
      if (!$rootScope.user) {
        $location.path('/');
      } else {
        $location.path(state);
      }
    };

    // Show a toast with input text
    $rootScope.showSimpleToast = function(text) {
      $mdToast.show(
        $mdToast.simple()
          .content(text || 'Toast!')
          .position('top right')
          .hideDelay(2000)
      );
    };

    $rootScope.deleteAccount = function() {
      // $http.delete($rootScope.serverHost + 'users/deleteUser/' + $rootScope.user.id + '/')
        $rootScope.showSimpleToast('Deleted ' + $rootScope.user.name);
        $rootScope.logout();
        // $rootScope.user = null;
        // $rootScope.goToState('/');
    };

    $rootScope.logout = function() {
      $rootScope.user = null;
      $rootScope.goToState('/');
    };
  });
