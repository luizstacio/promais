'use strict';
docApp.directive('validate', function() {
  return {
    restrict: 'A',
    controller: function($scope) {
      $scope.$watchCollection('user', function(user) {
        if ((user.name) && (user.email) && (user.repeatpass) && (user.password) && (user.password == user.repeatpass)) {
          user.valide = true;
        }
      });
    }
  };
});