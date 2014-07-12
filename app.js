var barApp = angular.module('barApp', []);


barApp.directive('databar', function() {
  return {
    restrict: "A",
    replace: true,
    scope: {
      elementOneCount: '=elementOne',
      lastElementCount: '=lastElementCount'
    },
    link: function(scope, element) {
    scope.elementOneWidth = scope.elementOneCount/scope.lastElementCount * 100;
    console.log(scope.elementOneCount);
    console.log(scope.lastElementCount);
    console.log(scope.elementOneWidth);
    },
    templateUrl: 'data-bar.html'
  };
});

barApp.controller('mainCtrl', function($scope) {
  $scope.elementOneCount = 30;
  $scope.lastElementCount = 300;
});
