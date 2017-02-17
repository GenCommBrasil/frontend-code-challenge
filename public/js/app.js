var app = angular.module('myApp', []);

/* $http ajax calls really belongs in a service,
but I'll be using them inside the controller for this demo */

app.controller('myCtrl', function($scope, $http, $log) {
  $log.debug('Carregou')
  $http.get('ling.json').then(function(data) {
    $scope.languages = data;
  });
  //inputting json directly for this example
  $scope.languages = [
    {name:"English"},
    {name:"Spanish"},
    {name:"German"},
    {name:"Russian"},
    {name:"Korean"}
  ];

  $scope.save = function() {
    $http.post('/users', $scope.languages).then(function(data) {
      $scope.msg = 'Data saved';
    });
    // $scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
  };
});