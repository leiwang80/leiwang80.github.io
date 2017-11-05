(function(){
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

ItemController.$inject = ['$stateParams'];
// function ItemController(itemlist, $stateParams){
function ItemController($stateParams){
    var item = this;
console.log('in item controller');
console.log($stateParams.categoryName);
    item.categoryname = $stateParams.categoryName;
    // this.itemlist = categoryitems.itemlist;
}

})();
