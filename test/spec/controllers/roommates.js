'use strict';

describe('Controller: roommatesCtrl', function() {
	beforeEach(module('frontendApp'));

	var controller, deferredGet;
	var $http, $rootScope, scope;

	beforeEach(inject(function($controller, _$http_, $q, _$rootScope_) {
		$http = _$http_;
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();

		$rootScope.user = { id: 'id' };

		$rootScope.serverHost = 'host/';
		$rootScope.showSimpleToast = function() {};
		$rootScope.goToState = function() {};

		deferredGet = $q.defer();

		spyOn($http, 'get').and.returnValue(deferredGet.promise);
		spyOn($rootScope, 'goToState');

		controller = $controller('roommatesCtrl', {
			$scope: scope
		});
	}));

	it('should set $scope.loading to true', function() {
		expect(scope.loading).toBeTruthy();
	});

	it('should call $http.get', function() {
		expect($http.get).toHaveBeenCalledWith($rootScope.serverHost + 'users/getCompatibleRoommates/id/');
	});

	describe('after promise resolution', function() {
		it('should set scope.roommates', function() {
			deferredGet.resolve({ data: 'some data' });
			scope.$digest();

			expect(scope.roommates).toEqual('some data');
		});

		it('should set scope.loading to false', function() {
			deferredGet.resolve({ data: 'some data' });
			scope.$digest();

			expect(scope.loading).toBeFalsy();
		});
	});

	describe('$scope.match', function() {
		it('should call $http.get', function() {
			scope.match('id2');

			expect($http.get).toHaveBeenCalledWith($rootScope.serverHost + 'users/getAvgUser/id/id2/');
		});

		describe('after promise resolution', function() {
			it('should set rootScope.match to the response', function() {
				scope.match('id2');

				deferredGet.resolve({ data: 'some data' });
				scope.$digest();

				expect($rootScope.match).toEqual('some data');
			});

			it('should go to hosues', function() {
				scope.match('id2');

				deferredGet.resolve({ data: 'some data' });
				scope.$digest();

				expect($rootScope.goToState).toHaveBeenCalledWith('houses');
			});
		});
	});
});
