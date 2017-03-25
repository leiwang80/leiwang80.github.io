
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  var critiria = 3;
  var msg = '';
  $scope.lunchList='';
  $scope.msg='';

  $scope.check = function () {
      if ($scope.lunchList.length==0){
         $scope.msg = 'Please enter data first';
      } else {
          console.log($scope.lunchList);
          // Use string.replace to remove ", whitespace , " situation
          var lunchArray = $scope.lunchList.replace(/[\s,]+/g,',').split(',');
          console.log(lunchArray.toString());
          if (lunchArray.length > critiria){
             $scope.msg = 'Too much!';
          } else {
             $scope.msg = 'Enjoy!';
          };
      }
    return;
  };

}

})();
