var hackApp = angular.module('hackApp', []);

hackApp.controller('SearchCtrl', ['$scope', '$http', function ($scope) {
    $scope.prompt = 'What are you in the mood for?';
    $scope.searchQuery = {};

}]);
hackApp.controller('OrderCtrl', ['$scope', function ($scope) {}]);
hackApp.controller('SuggestCtrl', ['$scope', function ($scope) {}]);
