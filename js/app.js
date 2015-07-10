var app = angular.module('tagSearcher', []);

app.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('MainController', ['$scope', '$http', function($scope, $http){
  $scope.results = [];
  // Function to submit to Instagram to get API
  $scope.submit = function(tag) {
    // Set URL
    var url = 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?client_id=5503095ad923454ea88d7e833aecbde9&callback=JSON_CALLBACK';
    // Make HTTP call
    $http.jsonp(url).success(function(result){
      // ON succes, log the data

      $scope.results = result.data;
      console.log($scope.results);
    }).error(function(data, status){
      // on fail, log the status code
      alert('STATUS CODE: ' + status);
    });
  };
}]);
//client_id: '5503095ad923454ea88d7e833aecbde9'
