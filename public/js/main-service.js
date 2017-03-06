angular.module('meusServicos', [])
    .factory('mainService', function($http) {

        var data = [];
        var getData = function() {
            return $http.get('http://localhost:3000/users')
                .then(function(response) {
                    data = response.data;         
                    return data;
                });
        }
        return {
            getData: getData
        };
    });
