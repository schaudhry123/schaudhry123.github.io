'use strict';

describe('Controller: signupCtrl', function() {
	beforeEach(module('frontendApp'));

	var controller, deferredPost;
	var $rootScope, scope;

	beforeEach(inject(function($controller, $q, _$rootScope_) {
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();

		$rootScope.user = { id: 'id' };

		$rootScope.serverHost = 'host/';
		$rootScope.goToState = function() {};

		spyOn($rootScope, 'goToState');

		controller = $controller('signupCtrl', {
			$scope: scope
		});
	}));

	it('should set scope.user from rootScope.user', function() {
		expect(scope.user).toBe($rootScope.user);
	});

	describe('$scope.updateUser', function() {
		it('should set rootScope.user from scope.user', function() {
			scope.user = 'some user';
			scope.updateUser();

			expect($rootScope.user).toBe(scope.user);
		});

		it('should go to signup pref state', function() {
			scope.updateUser();

			expect($rootScope.goToState).toHaveBeenCalledWith('signup_pref');
		});
	});
});
