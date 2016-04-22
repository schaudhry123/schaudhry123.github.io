'use strict';

angular.module('frontendApp')

.controller('houseSearchCtrl', function($http, $rootScope, $scope) {


  // $scope.search = {};
  // $scope.amenity = {};

  // if ($rootScope.match) {
  //   $scope.disableFilters = true;

  //   $scope.search.max_price = $rootScope.match.budget;
  //   var userStyle = $rootScope.match.style;
  //   $scope.search.style = userStyle.split(',')[0];

  //   for (var key in $rootScope.match.user_amenity) {
  //     if ($rootScope.match.user_amenity.hasOwnProperty(key) && $rootScope.match.user_amenity[key]) {
  //       $scope.amenity[key] = true;
  //     }
  //   }

  //   $rootScope.match = null;
  // }

  var searchHouses = function() {
    console.log("Searching for houses!");
    // var amenityString = '';

    // for (var key in $scope.amenity) {
    //   if ($scope.amenity.hasOwnProperty(key) && $scope.amenity[key]) {
    //     amenityString += '&' + key + '=True';
    //   }
    // }

    // $http
    //   .get($rootScope.serverHost + 'amenities?house_amenity_bool=True' + amenityString)
    //   .then(function(response) {
    //     var amenityIds = '';

    //     angular.forEach(response.data, function(amenity) {
    //       amenityIds += amenity.id + ',';
    //     });

    //     amenityIds = amenityIds.substring(0, amenityIds.length - 1);

    //     var flag = false;

    //     if (amenityIds !== '') {
    //       amenityIds = '?amenity=' + amenityIds;
    //     } else {
    //       $scope.houses = [];
    //       $scope.loading = false;
    //       return;
    //     }

    //     for (var key in $scope.search) {
    //       if ($scope.search.hasOwnProperty(key) && $scope.search[key]) {
    //         amenityIds += '&' + key + '=' + $scope.search[key];
    //       }
    //     }

    //     $http
    //       .get($rootScope.serverHost + 'houses' + amenityIds)
    //       .then(function(response) {
    //         $scope.houses = response.data;

    //         angular.forEach($scope.houses, function(house) {
    //           house.getExpectedPrice = function(month, year) {
    //             $http
    //               .post(
    //                 $rootScope.serverHost + 'location/getExpectedPrice/',
    //                 {
    //                   city: house.city,
    //                   apartment_type: house.style,
    //                   month: month,
    //                   year: year.toString()
    //                 }
    //               )
    //               .then(function(response) {
    //                 house.expectedPrice = response.data.expected_price;
    //               });
    //           };
    //         });

    //         $scope.loading = false;
    //       });
    //   });
  };

  // var getExpectedPrices = function() {
  //   angular.forEach($scope.houses, function(house) {
  //     house.getExpectedPrice($scope.expected.month, $scope.expected.year);
  //   });
  // };

  // $scope.$watch('search', function() {
  //   $scope.loading = true;
  //   searchHouses();
  // }, true);

  // $scope.$watch('amenity', function() {
  //   $scope.loading = true;
  //   searchHouses();
  // }, true);

  // $scope.$watch('expected', function(newExpected) {
  //   if (newExpected && newExpected !== {} && newExpected.month && newExpected.year) {
  //     getExpectedPrices();
  //   }
  // }, true);
});
