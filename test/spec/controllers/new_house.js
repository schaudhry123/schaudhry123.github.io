'use strict';

describe('Controller: newHouseCtrl', function() {
	beforeEach(module('frontendApp'));

	var controller, deferredPost;
	var $http, $rootScope, scope;

	beforeEach(inject(function($controller, _$http_, $q, _$rootScope_) {
		$http = _$http_;
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();

		$rootScope.serverHost = 'host/';
		$rootScope.showSimpleToast = function() {};
		$rootScope.goToState = function() {};

		scope.house = 'some house';

		deferredPost = $q.defer();

		spyOn($http, 'post').and.returnValue(deferredPost.promise);
		spyOn($rootScope, 'goToState');
		spyOn($rootScope, 'showSimpleToast');

		controller = $controller('newHouseCtrl', {
			$scope: scope
		});
	}));

	describe('$scope.createHouse', function() {
		it('should call $http.post', function() {
			scope.createHouse();

			expect($http.post).toHaveBeenCalledWith($rootScope.serverHost + 'houses/newHouse/', scope.house);
		});

		describe('after promise resolution', function() {
			it('should call showSimpleToast', function() {
				scope.createHouse();

				deferredPost.resolve();
				scope.$digest();

				expect($rootScope.showSimpleToast).toHaveBeenCalledWith('House created!');
			});

			it('should go to houses', function() {
				scope.createHouse();

				deferredPost.resolve();
				scope.$digest();

				expect($rootScope.goToState).toHaveBeenCalledWith('houses');
			});
		});
	});
});
