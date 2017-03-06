app.controller("signupCtrl", function($scope, $http, mainService) {

    $scope.register = function() {
        console.log($scope.data);
        $http.post('http://localhost:3000/users', $scope.data)
            .then(function(data) {
                console.log(data);
            })
    }

});
