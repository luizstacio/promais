var docApp = angular.module('docApp', []);
docApp.factory('authInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
      }
      return response || $q.when(response);
    }
  };
});
docApp.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});

// docApp.config(['$routeProvider', '$locationProvider',
//   function($routeProvider, $locationProvider) {
//     $routeProvider.
//       when('/', {
//         templateUrl: '/expose/user/index',
//         controller: 'userCrtl'
//       }).when('/config', {
//         templateUrl: '/expose/user/config',
//         controller: 'userCrtl'
//       }).
//       otherwise({
//         redirectTo: '/'
//       });
//     $locationProvider.html5Mode(true);
// }])