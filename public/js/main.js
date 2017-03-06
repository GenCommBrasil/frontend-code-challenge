app.controller("regCtrl", function($scope, $http, mainService) {

     mainService.getData().then(function(response){
         $scope.users = response;
         console.log($scope.users);
    });

});
