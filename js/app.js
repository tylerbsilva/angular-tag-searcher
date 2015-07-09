var app = angular.module('tagSearcher', [])

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
  // var removeHashtag = function(searchTerm){
  //   if(searchTerm.charAt(0) == "#" || searchTerm.charAt(0) == "&#35;"){
  //     searchTerm = searchTerm.substr(1);
  //     return searchTerm;
  //   } else {
  //     return searchTerm;
  //   }
  // };
  //
  // $scope.userInput = removeHashtag($scope.userInput);

  $scope.getTag = function() {
    console.log($scope.userInput);
    // Set URL of call
    var url = "https://api.instagram.com/v1/tags/" + $scope.userInput + "/media/recent?client_id=5503095ad923454ea88d7e833aecbde9";
    // Set params
    // var config = {
    //   method : 'GET',
    //   url : url,
    //   data: {
    //     count: 20
    //   }
    // };
    // Make Call
    $http.jsonp(url)
    .success(function(data){
      console.log(data);
    });
    // Clear out input
    $scope.userInput = "";
  };
}]);
