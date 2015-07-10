var app = angular.module('tagSearcher', []);
app.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
app.controller('MainController', ['$scope', '$http', function($scope, $http){
  $scope.submit = function(tag) {
    var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent';
    var request = {
      client_id : '5503095ad923454ea88d7e833aecbde9',
      count : 10
    };
    $http({
      method : 'JSONP',
      url : url,
      params : request
    }).success(function(data){
      console.log(data);
    }).error(function(data, status){
      console.log(status);
    });
  };

}]);



//client_id: '5503095ad923454ea88d7e833aecbde9'


















// app.controller('MainController', function($scope, $http){
//   // var removeHashtag = function(searchTerm){
//   //   if(searchTerm.charAt(0) == "#" || searchTerm.charAt(0) == "&#35;"){
//   //     searchTerm = searchTerm.substr(1);
//   //     return searchTerm;
//   //   } else {
//   //     return searchTerm;
//   //   }
//   // };
//   //
//   // $scope.userInput = removeHashtag($scope.userInput);
//   $scope.getTag = function(tag) {
//     console.log("User said: " + tag);
//     // Set URL of call
//     var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent';
//     // Set request paramaters
//     var request = {
//       callback: 'JSON_CALLBACK',
//       client_id: '5503095ad923454ea88d7e833aecbde9',
//       count: '10'
//     };
//     // Make Call
//     $http({
//       method: 'JSONP',
//       url: url,
//       params: request
//     }).success(function(data, status){
//       console.log(data);
//     }).error(function(data, status){
//       console.log('╯°□°）╯︵ ┻━┻ ' + status);
//     });
//     // Clear out input
//     $scope.userInput = "";
//   }; // END OF getTag
// }); // END OF MAINCONTROLLER
