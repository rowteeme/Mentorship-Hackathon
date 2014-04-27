var hackApp = angular.module('hackApp', []);

hackApp.controller('SearchCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.prompt = 'What kind of cuisine would you like? (ex: American, Mexican, Chinese)';
    $scope.query = {};
    $scope.queryBy = '$';
    $scope.restaurants = [];

    $http({
        method: 'GET',
        url: '//localhost:3000/search'
    })

    .success( function (data, status, headers, config) {
        console.log(data);
        $scope.restaurants = data.merchants;
        });

    // $scope.searchQuery = {};
    // $scope.cuisines = {};
    // $scope.results = {};
    // $scope.id = {}
    // $scope.summary = {};
    // $scope.name = '';

    //     $scope.searchQuery.searchResults = {};
    //     // $scope.searchQuery.merchants = {};
    //     $scope.searchQuery.searchResults.searchId = '';
    //     $scope.searchQuery.searchResults.searchSummary ={};
    //     $scope.searchQuery.searchResults.searchSummary.name = '';
    //     $scope.searchQuery.searchResults.searchSummary.searchCuisines = {};
    //     // $scope.searchQuery.searchResults.searchSummary.searchCuisines;
    //     // $scope.searchQuery.searchResults.searchSummary.searchName = '';
    //     // $scope.searchQuery.searchResults.summary.cuisines = {};
    //     // $scope.searchQuery.overall_rating = {};
    //     // $scope.searchQuery.restaurantResults = {};
    //     // $scope.searchQuery.restuarantID = '';



    // $http({
    //     method: 'GET',
    //     url: '//localhost:3000/search'
    // })

    // .success( function (data, status, headers, config) {

    //     // JSON doesn't support .length, so setting a key for the object and assigning to count gives it a length.
    //     var count = (Object.keys(data.merchants).length);

    //     for(i=0; i <= count; i++) {


    //        if (data.merchants[i] != null && data.merchants[i].summary.cuisines != null) {


    //            $scope.searchQuery.searchResults = data.merchants;
    //            $scope.searchQuery.searchId = data.merchants[i].id;
    //            $scope.searchQuery.searchSummary = data.merchants[i].summary;
    //            $scope.searchQuery.searchSummary.searchCuisines = data.merchants[i].summary.cuisines;
    //            $scope.searchQuery.searchSummary.searchName = data.merchants[i].summary.name;
    //            $scope.restaurantResults = [];
    //             // angular.forEach($scope.searchResults, function( id, cuisines){
    //             //     $scope.restaurantResults.push({id: id, cuisine: cuisine});
    //             // });
    //            console.log($scope.searchQuery.searchId);
    //            console.log($scope.searchQuery.searchSummary.cuisines);
    //            console.log($scope.searchQuery.searchSummary.searchName);
    //         }
    //     }

    //     // $scope.searchQuery.restaurants =
    //     // $scope.searchQuery.score = data.merchants.summary.overall_rating;
    //     console.log('it worked');

    //     // console.log($scope.searchQuery.score);
    // })

    // .error( function (data, status, headers, config) {
    //     console.log('It did not work');
    // });

//     $scope. = function(merchant) {
//     return function(user) {
//         return restaurant.id;
//     }
// }

}]);
hackApp.controller('OrderCtrl', ['$scope', function ($scope) {}]);
hackApp.controller('SuggestCtrl', ['$scope', function ($scope) {}]);
