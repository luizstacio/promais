'use strict';

docApp.controller('UserCtrl', [
  '$scope',
  '$http',
  '$window',
  '$docServices',
  function ($scope, $http, $window, $docServices){
    $scope.submit = function () {
      if (!$scope.login) {
        $http.post('/user/authenticate', $scope.user)
          .success(function (/* data, status, headers, config */) {
            var data = arguments[0];
            $window.sessionStorage.token = data.token;

            var encodedProfile = data.token.split('.')[1];
            var profile = JSON.parse($docServices.url_64decode(encodedProfile));
            console.log('Welcome ' + profile + ' ' + profile.last_name);
          })
          .error(function (/* data, status, headers, config */) {
            //var config = arguments[3];
            // Erase the token if the user fails to log in
            delete $window.sessionStorage.token;
            $scope.isAuthenticated = false;
            // Handle login errors here
            $scope.error = 'Error: Invalid user or password';
            $scope.welcome = '';
          }
        );
      } else {
        $http.post('/create/users', $scope.user).success(function(){
          console.log(arguments);
        })
      }
    };

    $scope.test = function(){
      $http.get('/api/users').success(function(data){
        console.log(data)
      });     
    }
  }
]);