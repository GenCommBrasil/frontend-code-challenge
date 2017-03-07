app.controller("adminCtrl", function($scope, $http, mainService) {

    mainService.getData().then(function(response){
         $scope.users = response;
         console.log($scope.users);
    });

});
