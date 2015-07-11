var app = angular.module('tagSearcher', ['ngAnimate']);

app.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('MainController', ['$scope', '$http', "$q", function($scope, $http, $q){
  // Remove Hash symbol from
  $scope.removeHashtag = function(searchTerm) {
    // Remove space if there is one
    searchTerm = searchTerm.replace(/ /g, "");

    // Remove # if at the beginning of the search term
    if (searchTerm.charAt(0) == "#" || searchTerm.charAt(0) == "&#35;") {
      searchTerm = searchTerm.substr(1);
      return searchTerm;
    } else {
      return searchTerm;
    }
  };

  $scope.results = [];
  // create Promise to give a 2 second grace period
  function wait() {
    var defer = $q.defer();
    // Simulating doing some asynchronous operation...
    setTimeout(function(){
      defer.resolve();
    }, 2000);
    return defer.promise;
  }

  // Function to submit to Instagram to get API
  $scope.submit = function(tag) {
    $scope.data = "";
    // Set URL
    $scope.tag = $scope.removeHashtag(tag);
    var url = 'https://api.instagram.com/v1/tags/'+$scope.tag+'/media/recent?client_id=5503095ad923454ea88d7e833aecbde9&callback=JSON_CALLBACK';
    // Make HTTP call
    $http.jsonp(url).success(function(result){
      $scope.searching = true;
      $scope.searchTag = "Searching for " + $scope.tag + " tag...";
      wait().then(function(){
        // Check if there are results
        if (result.data.length === 0){
          $scope.searchTag = "Sorry! I couldn't find any results for " + $scope.tag;
          wait().then(function(){
            $scope.searching = false;
          })
        } else {
          $scope.results = result.data;
          $scope.searching = false;
        } 
      });
    }).error(function(data, status){
      // on fail, log the status code
      scope.searching = true;
      $scope.searhTag = "I'm sorry, we're experiencing some trouble contacting Instagram!";
      wait().then(function(){
        $scope.searching = false;
      })
    });
  };
}]);
//client_id: '5503095ad923454ea88d7e833aecbde9'
