'use strict';

describe('Controller: editProfileCtrl', function() {
	beforeEach(module('frontendApp'));

	var controller, deferredPut;
	var $http, $rootScope, scope;

	beforeEach(inject(function($controller, _$http_, $q, _$rootScope_) {
		$http = _$http_;
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();

		$rootScope.user = { id: 'id' };

		$rootScope.serverHost = 'host/';
		$rootScope.showSimpleToast = function() {};
		$rootScope.goToState = function() {};

		deferredPut = $q.defer();

		spyOn($http, 'put').and.returnValue(deferredPut.promise);

		controller = $controller('editProfileCtrl', {
			$scope: scope
		});
	}));

	it('should set scope.user from rootScope.user', function() {
		expect(scope.user).toBe($rootScope.user);
	});

	describe('$scope.updateUser', function() {
		describe('before promise resolution', function() {
			it('should call $http.put', function() {
				scope.updateUser();

				expect($http.put).toHaveBeenCalledWith(
					$rootScope.serverHost + 'users/updateUser/id/',
					scope.user
				);
			});
		});

		describe('after promise resolution', function() {
			it('should assign $rootScope.user to the response', function() {
				scope.updateUser();

				deferredPut.resolve({ data: 'some data' });
				scope.$digest();

				expect($rootScope.user).toEqual('some data');
			});

			it('should call showSimpleToast', function() {
				spyOn($rootScope, 'showSimpleToast');
				scope.updateUser();

				deferredPut.resolve({ data: 'some data' });
				scope.$digest();

				expect($rootScope.showSimpleToast).toHaveBeenCalledWith('Profile updated!');
			});

			it('should call goToState', function() {
				spyOn($rootScope, 'goToState');
				scope.updateUser();

				deferredPut.resolve({ data: 'some data' });
				scope.$digest();

				expect($rootScope.goToState).toHaveBeenCalledWith('overview');
			});
		});
	});
});
