'use strict';

describe('Controller: editHouseCtrl', function() {
	beforeEach(module('frontendApp'));

	var controller, deferred, deferredPut;
	var $http, $rootScope, scope;

	beforeEach(inject(function($controller, _$http_, $q, _$rootScope_) {
		$http = _$http_;
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();

		$rootScope.serverHost = 'host/';
		$rootScope.editHouseId = 'ehID';
		$rootScope.showSimpleToast = function() {};
		$rootScope.goToState = function() {};

		deferred = $q.defer();
		deferredPut = $q.defer();

		spyOn($http, 'get').and.returnValue(deferred.promise);
		spyOn($http, 'put').and.returnValue(deferredPut.promise);

		controller = $controller('editHouseCtrl', {
			$scope: scope
		});
	}));

	it('should call $http.get', function() {
		expect($http.get).toHaveBeenCalledWith($rootScope.serverHost + 'houses/getHouse/' + $rootScope.editHouseId + '/');
	});

	describe('after promise resolution', function() {
		var response = {
			data : {
				'house': 'some house',
				'exact_cost': 'cost',
				'number_of_people': 'num_ppl'
			}
		};

		it('should assign the response to scope.house', function() {
			deferred.resolve(response);
			scope.$digest();

			expect(scope.house).toBe(response.data);
		});

		it('should assign house.cost to exact_cost', function() {
			deferred.resolve(response);
			scope.$digest();

			expect(scope.house.cost).toBe(response.data.exact_cost);
		});

		it('should assign house.roommates to number_of_people', function() {
			deferred.resolve(response);
			scope.$digest();

			expect(scope.house.roommates).toBe(response.data.number_of_people);
		});
	});

	describe('$scope.saveHouse', function() {
		var house = {
			'location': 'some location',
			'cost': 'some cost',
			'roommates': 'some roommates',
			'style': 'some style'
		};

		describe('before promise resolution', function() {
			it('should call $http.put', function() {
				scope.saveHouse(house);

				expect($http.put).toHaveBeenCalledWith(
					$rootScope.serverHost + 'houses/updateHouse/' + $rootScope.editHouseId + '/',
					{
						'location': house.location,
				    'exact_cost': house.cost,
				    'number_of_people': house.roommates,
				    'style': house.style
					}
				);
			});
		});

		describe('after promise resolution', function() {
			beforeEach(function() {
				spyOn($rootScope, 'showSimpleToast');
				spyOn($rootScope, 'goToState');
			});

			it('should call showSimpleToast', function() {
				scope.saveHouse(house);

				deferredPut.resolve();
				scope.$digest();

				expect($rootScope.showSimpleToast).toHaveBeenCalledWith('Added a house!');
			});

			it('should call goToState with houses', function() {
				scope.saveHouse(house);

				deferredPut.resolve();
				scope.$digest();

				expect($rootScope.goToState).toHaveBeenCalledWith('houses');
			});
		});
	});
});
