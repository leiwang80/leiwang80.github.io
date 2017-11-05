(function(){
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

// CategoryController.$inject = ['categorylist'];
// function CategoryController(categorylist){

function CategoryController(){
    //var categories = this;

    console.log('here 3');
    //    console.log(categorylist);
//    this.categorylist = categorylist;
    this.test = "hello";
}

})();
