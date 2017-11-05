(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
 })

  .state('categories', {
    url: '/categories',
    // templateUrl: 'src/menu/templates/main-categories.template.html',
    // controller: "CategoryController as categories",
    template: '<categories categorylist="$resolve.categorylist"> </categories>',
    resolve: {
      categorylist: ['DataService', function (DataService) {
          return DataService.getAllCategories();} ]
    }

})

  .state('items', {
    url: '/itmes/:categorySN?categoryName',
    template: '<items itemlist="$resolve.itemlist" categoryname="item.categoryname"> </items>',
    controller: 'ItemController as item',
    // template: 'hello',
    resolve: {
        itemlist: ['$stateParams', 'DataService',  function($stateParams, DataService) {
              return DataService.getItemsForCategory($stateParams.categorySN);
          }]
    }

});

}

})();
