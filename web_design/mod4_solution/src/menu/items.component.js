(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menu/templates/items.template.html',
  // controller: 'ItemController as $ctrl',
  bindings: {
    itemlist: '<',
    categoryname: '<'
  }

});

})();
