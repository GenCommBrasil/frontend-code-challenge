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

        var postData = function(data) {
            return $http.post('http://localhost:3000/users', data)
            .then(function(data) {
                console.log(data);
            })
        }

        return {
            getData: getData,
            postData: postData
        };
    });
