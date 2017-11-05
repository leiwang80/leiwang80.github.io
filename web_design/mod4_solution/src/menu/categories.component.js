(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menu/templates/categories.template.html',
  controller: 'CategoryController as $ctrl',
  bindings: {
    categorylist: '<'
  }
});

})();
