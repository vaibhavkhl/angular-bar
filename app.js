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
    scope.elementOneWidth = scope.elementOneCount/scope.lastElementCount * 100;
    scope.elementTwoWidth = scope.elementTwoCount/scope.lastElementCount * 100;
    console.log(scope.elementOneWidth);
    console.log(scope.elementTwoWidth);
    },
    templateUrl: 'data-bar.html'
  };
});

barApp.controller('mainCtrl', function($scope) {
  $scope.elementOneCount = 30;
  $scope.elementTwoCount = 100;
  $scope.lastElementCount = 300;
});
