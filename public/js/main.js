app.controller("regCtrl", function($scope, $http, mainService) {
	
	var self = this;

    $http({
        method: 'GET',
        url: 'http://localhost:3000/users'
    }).then(function successCallback(response) {
        $scope.users = response.data;
        console.log($scope.users);
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});
