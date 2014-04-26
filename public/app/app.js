var hackApp = angular.module('hackApp', []);

hackApp.controller('SearchCtrl', ['$scope', '$http', function ($scope) {
    $scope.prompt = 'What kind of cuisine would you like? (ex: American, Mexican, Chinese)';
    $scope.searchQuery = {};




}]);
hackApp.controller('OrderCtrl', ['$scope', function ($scope) {}]);
hackApp.controller('SuggestCtrl', ['$scope', function ($scope) {}]);
