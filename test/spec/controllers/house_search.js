'use strict';

describe('Controller: houseSearchCtrl', function() {
	beforeEach(module('frontendApp'));

	var createNullController, createFullController;
	var controller, deferredGet, deferredPost;
	var $http, $rootScope, scope;

	beforeEach(inject(function($controller, _$http_, $q, _$rootScope_) {
		$http = _$http_;
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();

		$rootScope.serverHost = 'host/';
		$rootScope.showSimpleToast = function() {};
		$rootScope.goToState = function() {};

		$rootScope.match = undefined;

		deferredGet = $q.defer();
		deferredPost = $q.defer();

		spyOn($http, 'get').and.returnValue(deferredGet.promise);
		spyOn($http, 'post').and.returnValue(deferredPost.promise);
		spyOn($rootScope, 'goToState');
		spyOn($rootScope, 'showSimpleToast');

		createNullController = function() {
			return $controller('houseSearchCtrl', {
				$scope: scope
			});
		};

		createFullController = function() {
			return $controller('houseSearchCtrl', {
				$scope: scope,
				$rootScope: {
					match: {
						budget: 1000,
						style: 'some,style',
						user_amenity: {
							amenity1: true,
							amenity2: true
						}
					},
					serverHost: 'host/',
					showSimpleToast: function() {},
					goToState: function() {}
				}
			});
		};
	}));

	it('should set scope.search to an empty object', function() {
		controller = createNullController();
		expect(scope.search).toEqual({});
	});

	it('should set scope.amenity to an empty object', function() {
		controller = createNullController();
		expect(scope.amenity).toEqual({});
	});

	it('should not set scope.disableFilters', function() {
		controller = createNullController();
		expect(scope.disableFilters).toBe(undefined);
	});

	describe('$rootScope.match is defined', function() {
		beforeEach(function() {
			controller = createFullController();
		});

		it('should disable the filters', function() {
			expect(scope.disableFilters).toBeTruthy();
		});

		it('should set search.max_price to match.budget', function() {
			expect(scope.search.max_price).toEqual(1000);
		});

		it('should set search.style to the first result of match.style', function() {
			expect(scope.search.style).toEqual('some');
		});

		it('should set the amenities to true', function() {
			expect(scope.amenity).toEqual({
				amenity1: true,
				amenity2: true
			});
		});

		it('should undefine $rootScope.match once it is done processing', function() {
			expect($rootScope.match).toBe(undefined);
		});
	});

	describe('$scope.$watch search', function() {
		beforeEach(function() {
			controller = createFullController();
		});

		it('should set scope.loading to true', function() {
			scope.search.style = 'some style';
			scope.$digest();

			expect(scope.loading).toBeTruthy();
		});

		it('should call $http.get with the built amenity string', function() {
			scope.search.style = 'some style';
			scope.$digest();

			expect($http.get).toHaveBeenCalledWith($rootScope.serverHost + 'amenities?house_amenity_bool=True&amenity1=True&amenity2=True');
		});

		describe('after promise resolution', function() {
			describe('no amenities returned', function() {
				it('should set scope.houses to empty array', function() {
					scope.search.style = 'some style';
					scope.$digest();

					deferredGet.resolve({ data: [] });
					scope.$digest();

					expect(scope.houses).toEqual([]);
				});

				it('should set scope.loading to false', function() {
					scope.search.style = 'some style';
					scope.$digest();

					deferredGet.resolve({ data: [] });
					scope.$digest();

					expect(scope.loading).toBeFalsy();
				});
			});

			describe('amenities returned', function() {
				it('should call $http.get with the returned amenities and search variables', function() {
					scope.search.style = 'some style';
					scope.$digest();

					deferredGet.resolve({ data: [{ id: 'some id' }] });
					scope.$digest();

					expect($http.get).toHaveBeenCalledWith($rootScope.serverHost + 'houses?amenity=some id&max_price=1000&style=some style');
				});

				describe('after promise resolution', function() {
					it('should set getExpectedPrice for each house', function() {
						scope.search.style = 'some style';
						scope.$digest();

						deferredGet.resolve({ data: [{ id: 'some id' }] });
						scope.$digest();

						deferredGet.resolve({ data: [{ house: 'some house' }] });
						scope.$digest();

						expect(scope.houses[0].getExpectedPrice).toEqual(jasmine.any(Function));
					});
				});
			});
		});
	});

	describe('$scope.$watch amenity', function() {
		beforeEach(function() {
			controller = createFullController();
		});

		it('should set scope.loading to true', function() {
			scope.amenity.prop = true;
			scope.$digest();

			expect(scope.loading).toBeTruthy();
		});

		it('should call $http.get with the built amenity string', function() {
			scope.amenity.prop = true;
			scope.$digest();

			expect($http.get).toHaveBeenCalledWith($rootScope.serverHost + 'amenities?house_amenity_bool=True&amenity1=True&amenity2=True&prop=True');
		});

		describe('after promise resolution', function() {
			describe('no amenities returned', function() {
				it('should set scope.houses to empty array', function() {
					scope.amenity.prop = true;
					scope.$digest();

					deferredGet.resolve({ data: [] });
					scope.$digest();

					expect(scope.houses).toEqual([]);
				});

				it('should set scope.loading to false', function() {
					scope.amenity.prop = true;
					scope.$digest();

					deferredGet.resolve({ data: [] });
					scope.$digest();

					expect(scope.loading).toBeFalsy();
				});
			});

			describe('amenities returned', function() {
				it('should call $http.get with the returned amenities and search variables', function() {
					scope.amenity.prop = true;
					scope.$digest();

					deferredGet.resolve({ data: [{ id: 'some id' }] });
					scope.$digest();

					expect($http.get).toHaveBeenCalledWith($rootScope.serverHost + 'houses?amenity=some id&max_price=1000&style=some');
				});

				describe('after promise resolution', function() {
					it('should set getExpectedPrice for each house', function() {
						scope.amenity.prop = true;
						scope.$digest();

						deferredGet.resolve({ data: [{ id: 'some id' }] });
						scope.$digest();

						deferredGet.resolve({ data: [{ house: 'some house' }] });
						scope.$digest();

						expect(scope.houses[0].getExpectedPrice).toEqual(jasmine.any(Function));
					});
				});
			});
		});
	});

	describe('$scope.$watch expected', function() {
		beforeEach(function() {
			controller = createFullController();
		});

		it('should do nothing if scope.expected is not defined', function() {
			scope.expected = undefined;
			scope.$digest();

			expect($http.post).not.toHaveBeenCalled();
		});

		it('should do nothing if scope.expected is an empty object', function() {
			scope.expected = {};
			scope.$digest();

			expect($http.post).not.toHaveBeenCalled();
		});

		it('should do nothing if scope.expected does not have both properties', function() {
			scope.expected = { month: 'month' };
			scope.$digest();

			expect($http.post).not.toHaveBeenCalled();

			scope.expected = { year: 'year' };
			scope.$digest();

			expect($http.post).not.toHaveBeenCalled();
		});

		it('should call getExpectedPrices when a valid expected object is passed', function() {
			scope.expected = { month: 'month', year: 'year' };
			scope.houses = [{
				getExpectedPrice: function(month, year) {}
			}];
			spyOn(scope.houses[0], 'getExpectedPrice');

			scope.$digest();

			expect(scope.houses[0].getExpectedPrice).toHaveBeenCalledWith('month', 'year');
		});

		describe('getExpectedPrice', function() {
			it('should call $http.post', function() {
				scope.search.style = 'some style';
				scope.$digest();

				deferredGet.resolve({ data: [{ id: 'some id' }] });
				scope.$digest();

				deferredGet.resolve({ data: [{ city: 'some city', style: 'some style' }] });
				scope.$digest();

				scope.expected = { month: 'month', year: 'year' };
				scope.$digest();

				expect($http.post).toHaveBeenCalled();
			});

			describe('after promise resolution', function() {
				it('should assign the expected price from the response', function() {
					scope.search.style = 'some style';
					scope.$digest();

					deferredGet.resolve({ data: [{ id: 'some id' }] });
					scope.$digest();

					deferredGet.resolve({ data: [{ city: 'some city', style: 'some style' }] });
					scope.$digest();

					scope.expected = { month: 'month', year: 'year' };
					scope.$digest();

					deferredPost.resolve({ data: { expected_price: 'some price' } });
					scope.$digest();

					expect(scope.houses[0].expectedPrice).toEqual('some price');
				});
			});
		});
	});
});
