angular.module('ModJaxx', []);

angular.module('ModJaxx')
// we add $httpso that we can make http requests 
	.controller('controlJaxx', ['$scope', '$http', function($scope, $http) {

		$scope.greeting='Woohoo Sandwiches!'
		$scope.sandwichLoader = 'Loading...'
		// MAKE SURE YOU CHECK THE NETWORK TAB IN THE JS IN THE BROWSER-- anything that's not quite right WILL SHOW UP THERE!!
		// we're going to keep track of sandwiches
		// now we need to make a get request somewhere
		// 
		// there are two main ways to handle http requests in angular:
		// #1:
		// $scope.sandwiches = $http.get('/api/sandwiches')
		// console.log($scope.sandwiches)
		// #2:
		$http.get('/api/sandwiches')
			.then(function(dataFromServer){
				// console.log(dataFromServer.data)
				$scope.sandwiches = dataFromServer.data
			})

		$scope.makeMeASandwich = function () {
			// we want to post information to the server
			$http.post('/api/sandwiches', $scope.newSandwich)
				.then(function(dataFromServer){
					$scope.sandwiches = dataFromServer.data
					$scope.newSandwich = {} 
				})
		}
		// this is cool because it will keep the sandwiches in the array until the SERVER is restarted AKA it will stay through a refresh of the page (ooooooh)






	}])