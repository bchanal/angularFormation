'use strict';

/**
 * @ngdoc function
 * @name angularProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectsApp
 */
angular.module('angularProjectsApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.hellos = [
          {title: 'hello', description: 'english'},
          {title: 'bonjour', description: 'french'},
          {title: 'hola', description: 'spanish'}];

    $scope.goDetail = function(){
        $location.url("/detail");
    }

    $scope.choucroute = ['saucisse', 'chou', 'patates', 'morteau', 'kessler', 'lard', 'coriandre'];

  });
