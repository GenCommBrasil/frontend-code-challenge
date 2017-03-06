angular.module('meusServicos', [])
    .factory('mainService', function($http) {

         var data = {
            getData: function(onSuccess, onError) {
                return $http.get('data/example-data.js')
                    .success(onSuccess)
                    .error(onError);
            }
        };
        return data;
    });
