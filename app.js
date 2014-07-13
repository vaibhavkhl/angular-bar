var barApp = angular.module('barApp', []);


barApp.directive('databar', function() {
  return {
    restrict: "A",
    replace: true,
    scope: {
      elementOneCount: '=elementOneCount',
      lastElementCount: '=lastElementCount',
      elementTwoCount: '=elementTwoCount'
    },
    link: function(scope, element) {
    var calculateWidth = function() {
		  scope.elementOneWidth = scope.elementOneCount/scope.lastElementCount * 100;
		  scope.elementTwoWidth = scope.elementTwoCount/scope.lastElementCount * 100;
		  console.log(scope.elementOneWidth);
		  console.log(scope.elementTwoWidth);	
    };
    scope.$watchCollection('[elementOneCount, elementTwoCount, lastElementCount]', calculateWidth);
    },
    templateUrl: 'data-bar.html'
  };
});

barApp.controller('mainCtrl', function($scope) {
  $scope.elementOneCount = 100;
  $scope.elementTwoCount = 200;
  $scope.lastElementCount = 300;
  
  $scope.changeData = function() {
	$scope.elementOneCount = 50;
	$scope.elementTwoCount = 150;
  };

  $scope.changeLastCount = function() {
  	$scope.lastElementCount = 200;
  }
});


