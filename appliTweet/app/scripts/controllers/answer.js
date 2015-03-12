'use strict';


angular.module('documentsApp')
  .controller('AnswerCtrl', function ($routeParams, $http, $scope) {
  console.log($routeParams.tweet);

  $http.get("http://192.168.10.73:8080/tweets/"+$routeParams.tweet+"/answers").success(function(data){
          $scope.tweets=data;
  })
      .error(function(data){
          $scope.errors=data;
              })


}
);

