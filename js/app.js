var app = angular.module('tagSearcher', []);

app.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('MainController', ['$scope', '$http', function($scope, $http){
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
    console.log("User said: " + $scope.userInput);
    // Set URL of call
    var url = 'https://api.instagram.com/v1/tags/' + $scope.userInput + '/media/recent?';
    // Set request paramaters
    var request = {
      callback: 'JSON_CALLBACK',
      client_id: '5503095ad923454ea88d7e833aecbde9',
    };
    // Make Call
    $http({
      method: 'JSONP',
      url: url,
      params: request
    })
    .success(function(data, status){
      console.log(data);
    })
    .error(function(data, status){
      console.log('(╯°□°）╯︵ ┻━┻ ' + status);
    });
    // Clear out input
    $scope.userInput = "";
  };
}]);


//client_id: '5503095ad923454ea88d7e833aecbde9'
