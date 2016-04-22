'use strict';

describe('Controller: signupPrefCtrl', function() {
	beforeEach(module('frontendApp'));

	var controller, deferredPost;
	var $http, $rootScope, scope;

	beforeEach(inject(function($controller, _$http_, $q, _$rootScope_) {
		$http = _$http_;
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();

		$rootScope.user = { id: 'id' };

		$rootScope.serverHost = 'host/';
		$rootScope.showSimpleToast = function() {};
		$rootScope.goToState = function() {};

		deferredPost = $q.defer();

		spyOn($http, 'post').and.returnValue(deferredPost.promise);
		spyOn($rootScope, 'goToState');
		spyOn($rootScope, 'showSimpleToast');

		controller = $controller('signupPrefCtrl', {
			$scope: scope
		});
	}));

	it('should set scope.user from the rootScope.user', function() {
		expect(scope.user).toBe($rootScope.user);
	});

	it('should set scope.user.user_amenity to empty object', function() {
		expect(scope.user.user_amenity).toEqual({});
	});

	it('should set scope.user.house_amenity_bool to true', function() {
		expect(scope.user.house_amenity_bool).toBeTruthy();
	});

	it('should set user settings to 3', function() {
		var list = ['smoking', 'environment', 'condition', 'belongings', 'guests', 'sleep'];

		angular.forEach(list, function(prop) {
			expect(scope.user[prop]).toEqual(3);
		});
	});

	describe('$scope.updateUser', function() {
		it('should call $http.post', function() {
			scope.updateUser();

			expect($http.post).toHaveBeenCalledWith($rootScope.serverHost + 'users/newUser/', scope.user);
		});

		describe('after promise resolution', function() {
			it('should set rootScope.user to the response', function() {
				scope.updateUser();

				deferredPost.resolve({ data: 'some data' });
				scope.$digest();

				expect($rootScope.user).toEqual('some data');
			});

			it('should toast', function() {
				scope.updateUser();

				deferredPost.resolve({ data: 'some data' });
				scope.$digest();

				expect($rootScope.showSimpleToast).toHaveBeenCalledWith('Welcome!');
			});

			it('should go to overview', function() {
				scope.updateUser();

				deferredPost.resolve({ data: 'some data' });
				scope.$digest();

				expect($rootScope.goToState).toHaveBeenCalledWith('overview');
			});
		});
	});
});
