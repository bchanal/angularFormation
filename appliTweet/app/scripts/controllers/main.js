'use strict';
/**
 * @name documentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the documentsApp
 */
angular.module('documentsApp')
  .controller('MainCtrl', function ($scope, $http) {

  $scope.dateToRelative = function(date){
    return moment(date).fromNow();
  }

    $http.get("http://192.168.10.73:8080/tweets").success(function(data){
        $scope.tweets=data;
})
    .error(function(data){
        $scope.errors=data;
            } )

    $scope.submit = function(){
        var payload={'authorEmail':$scope.email,'authorName':$scope.name, 'message':$scope.message};

      $http.post("http://192.168.10.73:8080/tweets", payload)
               .success(function(data){
                     })
          .error(function(data){
                  // Gestion d’erreur
          })

      }

  });

angular.module('documentsApp').filter('ago', function() {
   return function(date){
       return moment(date).fromNow();
    }
     });

