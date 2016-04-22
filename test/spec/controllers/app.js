'use strict';

describe('Controller: appCtrl', function() {
	beforeEach(module('frontendApp'));

	var controller, deferred;
	var $http, $location, $mdToast, $rootScope;

	beforeEach(inject(function($controller, _$http_, _$location_, _$mdToast_, $q, _$rootScope_) {
		$http = _$http_;
		$location = _$location_;
		$mdToast = _$mdToast_;
		$rootScope = _$rootScope_;

		deferred = $q.defer();

		spyOn($http, 'delete').and.returnValue(deferred.promise);
		spyOn($location, 'path');
		spyOn($mdToast, 'show');
    spyOn($mdToast, 'simple').and.callThrough();

		controller = $controller('appCtrl', {});
	}));

	it('should have heroku set as the server host', function() {
		expect($rootScope.serverHost).toEqual('http://tophaus.herokuapp.com/');
	});

	it('should set location.path to root if user is not defined', function() {
		expect($location.path).toHaveBeenCalledWith('/');
	});

	describe('$rootScope.goToState', function() {
		it('should set location.path to root if user is not defined', function() {
			$rootScope.goToState();

			expect($location.path).toHaveBeenCalledWith('/');
		});

		it('should set location.path to state if user is defined', function() {
			$rootScope.user = 'some user';
			$rootScope.goToState('some state');

			expect($location.path).toHaveBeenCalledWith('some state');
		});
	});

	describe('rootScope.showSimpleToast', function() {
    it('should call $mdToast.show', function() {
      $rootScope.showSimpleToast();
      expect($mdToast.show).toHaveBeenCalled();
    });

    it('should call $mdToast.simple', function() {
      $rootScope.showSimpleToast();
      expect($mdToast.simple).toHaveBeenCalled();
    });
  });

	describe('$rootScope.deleteAccount', function() {
		beforeEach(function() {
			$rootScope.user = { id: 'id', name: 'name' };
		});

		describe('before promise resolution', function() {
			it('should call $http.delete', function() {
				$rootScope.deleteAccount();

				expect($http.delete).toHaveBeenCalledWith($rootScope.serverHost + 'users/deleteUser/id/');
			});
		});

		describe('after promise resolution', function() {
			it('should call showSimpleToast', function() {
				spyOn($rootScope, 'showSimpleToast');

				$rootScope.deleteAccount();
				
        deferred.resolve();
        $rootScope.$digest();

        expect($rootScope.showSimpleToast).toHaveBeenCalledWith('Deleted name');
			});

			it('should call logout', function() {
				spyOn($rootScope, 'logout');

				$rootScope.deleteAccount();
				
        deferred.resolve();
        $rootScope.$digest();

        expect($rootScope.logout).toHaveBeenCalled();
			});
		});
	});

	describe('$rootScope.logout', function() {
		beforeEach(function() {
			$rootScope.user = 'some user';
		});

		it('should set user to null', function() {
			$rootScope.logout();

			expect($rootScope.user).toBe(null);
		});

		it('should call goToState', function() {
			spyOn($rootScope, 'goToState');

			$rootScope.logout();

			expect($rootScope.goToState).toHaveBeenCalledWith('/');
		});
	});
});