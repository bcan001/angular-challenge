

var fibonacciControllers = angular.module('fibonacciControllers', []);

	fibonacciControllers.controller('pageController', ['$scope','$http', function ($scope, $http) {
		$scope.finalValueRecursive = 0;

		$scope.allValues = [0,1];
		$scope.pushButtonRecursive = function() {
			var fib = function () {
				if ($scope.allValues.length < 4) {
					$scope.finalValueRecursive = 1;
				} else {
					$scope.finalValueRecursive = ($scope.allValues[$scope.allValues.length - 1]) + ($scope.allValues[$scope.allValues.length - 2]);
				}
				$scope.allValues.push($scope.finalValueRecursive);
			}
			fib();
		}

		$scope.finalValueIterative = 0;
		$scope.count = 1;
		$scope.pushButtonIterative = function () {
			var fib = function(n) {
	    	var a = 0, b = 1, f = 1;
	    	for(var i = 2; i <= n; i++) {
	      	f = a + b;
	      	a = b;
	      	b = f;
	  		}
	    	$scope.finalValueIterative = f;
	    	$scope.count = $scope.count + 1;
			};
			fib($scope.count)
		}
	}]);