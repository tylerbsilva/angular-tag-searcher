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
    $scope.results = [];
    // Make Call
    // Query made to Instagram API
    var url = 'https://api.instagram.com/v1/tags/' + $scope.userInput + '/media/recent';
    var request = {
      callback: 'JSON_CALLBACK',
      client_id: '5503095ad923454ea88d7e833aecbde9',
    };

    $http({
      method: 'JSONP',
      url: url,
      params: request
    })
    .success(function(data){
      $scope.results = data.data;
      console.log($scope.results);
    });
    // Clear out input
    $scope.userInput = "";
  };
}]);
