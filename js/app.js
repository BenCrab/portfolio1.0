/* global angular : true codekit fix */
/* global console : true codekit fix */

var app = angular.module('portfolio', []);

app.controller('portfolioCtrl', function($scope, portfolioFactory) {
  $scope.behanceLoaded = false;
  $scope.dribbbleLoaded = false;

  portfolioFactory.getBehance().then(function onFulfilled(data){
    $scope.behance = data;
    $scope.behanceLoaded = true;
  }).catch(function onRejected() {
    console.log('Error in Behance Factory');
  });

  portfolioFactory.getDribbble().then(function onFulfilled(data){
    $scope.dribbble = data;
    $scope.dribbbleLoaded = true;
  }).catch(function onRejected() {
    console.log('Error in Dribbble Factory');
  });

  // $scope.medium = portfolioFactory.getMedium().then(function onFulfilled(data){
  //
  //   $scope.medium = data;
  //   $scope.mediumLoaded = true;
  // }).catch(function onRejected() {
  //   console.log('Error in Medium Factory');
  // });

});

app.factory('portfolioFactory', function($http) {

  var getBehance = function() {
    var user = 'ben_crabtree';
    var apiKey = 'Xitxws5xyFy1zLPXsSwMTLOLaT0GgWbf';
      return $http.jsonp('https://behance.net/v2/users/'+ user +'/projects?api_key='+ apiKey + '&callback=JSON_CALLBACK').then(function onFulfilled(response) {
        return response.data.projects;
    });
  };


  var getDribbble = function() {
    var user = '_bctree';
    var apiKey = '9b89dd21c14224e2bc882c8edda89dcc37f45dc941f58824ca748a3b1f8245c4';
      return $http({method: 'GET', url: 'https://api.dribbble.com/v1/users/' + user + '/shots?access_token=' + apiKey }).then(function onFulfilled(response) {
        return response.data;
    });
  };

  // var getMedium = function() {
  //   var url = "https://medium.com/feed/@taylorp/";
  //   return $http.jsonp('https://api.rss2json.com/v1/api.json?callback=JSON_CALLBACK&rss_url=' + encodeURIComponent(url)).then(function onFulfilled(response) {
  //     console.log(response);
  //     return response.data.items;
  //   });
  // };


  return {
    getBehance: getBehance,
    getDribbble: getDribbble,
    // getMedium: getMedium
  };

});
