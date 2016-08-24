'use strict';

/**
 * @ngdoc function
 * @name <%= scriptAppName %>.controller:<%= classedName %>Ctrl
 * @description
 * # <%= classedName %>Ctrl
 * Controller of the <%= scriptAppName %>
 */

var $;
$('#mobile-nav li').on('click', function(){
  $('.button-collapse').sideNav('hide');
});

angular.module('<%= scriptAppName %>')
  .controller('<%= classedName %>Ctrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('NavController', function ($scope ,$location){
	$scope.currentPath = function (viewLocation) { 
		return viewLocation === $location.path();
	};
  });
