(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    templateUrl: 'foundItem.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.isEmpty = function(){
      if ( Array.isArray(list.items) && (list.items.length == 0)) {
          return true;
      } else {
          return false;
      }
  };

  list.isNotEmpty = function(){
      if ( Array.isArray(list.items) && (list.items.length > 0)) {
          return true;
      } else {
          return false;
      }
  }

}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.searchTerm = "";

  menu.getMatchedMenuItems = function() {
      console.log("seach term: " + menu.searchTerm);
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

      promise.then(function (result) {
        menu.foundItems = result;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
  };

  menu.removeItem = function (itemIndex) {
    menu.foundItems.splice(itemIndex, 1);
  };


}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(seachTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(response) {
        return processSearch(response, seachTerm);
    });

    return response;
  };

  var processSearch = function(response, searchTerm) {
      var results = [];
      var items = response.data.menu_items;
      var searchStr = searchTerm.trim().toLowerCase();

      for (var i=0;  i < items.length; i++){
          console.log(searchStr + " : " + items[i].description.toLowerCase());
          if (items[i].description.toLowerCase().indexOf(searchTerm) > -1){
              results.push(items[i]);
          }

      }
      console.log("results:  " + results);
      return results;
  };


}

})();
