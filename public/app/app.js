var hackApp = angular.module('hackApp', []);

hackApp.controller('SearchCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.prompt = 'What kind of cuisine would you like? (ex: American, Mexican, Chinese)';
    $scope.searchQuery = {};


        $scope.searchQuery.results = {};
        $scope.searchQuery.merchants = {};
        $scope.searchQuery.results.id = '';
        // $scope.searchQuery.overall_rating = {};
        $scope.searchQuery.restaurantResults = {};
        $scope.searchQuery.restuarantID = '';



    $http({
        method: 'GET',
        url: '//localhost:3000/search'
    })

    .success( function (data, status, headers, config) {

        // JSON doesn't support .length, so setting a key for the object and assigning to count gives it a length.
        var count = (Object.keys(data.merchants).length);

        for(i=0; i <= count; i++) {
           $scope.searchQuery.results = data.merchants[i];
           $scope.restaurantResults = [];
            // angular.forEach($scope.restaurantResults, function( id, summary){
            //     $scope.restaurantResults.push({id: id, summary: summary});
            // });
           console.log($scope.searchQuery.results.id);
           console.log($scope.searchQuery.results.summary.cuisines);
           // console.log($scope.restaurantResults.summary);
        }

        // $scope.searchQuery.restaurants =
        // $scope.searchQuery.score = data.merchants.summary.overall_rating;
        console.log('it worked');

        // console.log($scope.searchQuery.score);
    })

    .error( function (data, status, headers, config) {
        console.log('It did not work');
    });

//     $scope. = function(merchant) {
//     return function(user) {
//         return restaurant.id;
//     }
// }

}]);
hackApp.controller('OrderCtrl', ['$scope', function ($scope) {}]);
hackApp.controller('SuggestCtrl', ['$scope', function ($scope) {}]);
