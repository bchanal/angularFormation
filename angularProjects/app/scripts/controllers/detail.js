'use strict';

/**
 * @ngdoc function
 * @name angularProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectsApp
 */
angular.module('angularProjectsApp')
  .controller('DetailCtrl', function ($scope, $location) {
    $scope.hellos = [
          {title: 'hi', description: 'english'},
          {title: 'salut', description: 'french'},
          {title: 'buenos diaaas', description: 'spanish'}];


  });
