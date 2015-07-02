'use strict';

/**
 * @ngdoc function
 * @name angularJs.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of angularJs
 */
angular.module('angularJs')
  .controller('MainCtrl', function($scope) {
    $scope.tasks = [
      'view',
      'controller',
      'route',
      'directive',
      'filter',
      'service',
      'factory',
      'constant'
    ];
  })
  .controller('NameListController', function() {
    var nameList = this;
    nameList.names = [];
    nameList.participants = [];

    nameList.addName = function() {
      nameList.names.push({text:nameList.nameText, screwed:false});
      nameList.nameText = '';
    };

    nameList.startRandomDraw = function() {
      for(var i = 0; i < nameList.names.length; i++) {
          nameList.names[i].screwed = false;
      }
      nameList.participants = nameList.names;
      nameList.participants[Math.floor(Math.random() * nameList.participants.length)].screwed = true;
    };



  });
