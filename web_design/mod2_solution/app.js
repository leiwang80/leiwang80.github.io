(function () {
'use strict';
console.log('hi 1');
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;


  toBuy.list = ShoppingListCheckOffService.getToBuyList();
  //toBuy.list =  [{ name: "cookies", quantity: 10 }];

  toBuy.isEmptyList = function() {
       return ShoppingListCheckOffService.isEmptyToBuyList();
   };
//toBuy.isEmptyList = true;

  toBuy.buyItem = function (itemIdex) {
    ShoppingListCheckOffService.buyItem(itemIdex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.list = ShoppingListCheckOffService.getAlreadyBoughtList();
  alreadyBought.isEmptyList = function() {
      return ShoppingListCheckOffService.isEmptyAlreadyBoughtList();
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyList = [{ name: "cookies", quantity: 10 },
                { name: "banana", quantity: 8 } ,
                { name: "nuts", quantity: 6 },
                { name: "apples", quantity: 10 } ,
                { name: "oranges", quantity: 20 } ];
  var alreadyBoughtList = [];

  service.buyItem = function (itemIdex) {
    var item = toBuyList[itemIdex];
    alreadyBoughtList.push(item);
    toBuyList.splice(itemIdex, 1);
  };

  service.log = function(){
      console.log("here");;
  }

  service.getToBuyList = function () {
    return toBuyList;
  };

  service.getAlreadyBoughtList = function () {
    return alreadyBoughtList;
    //return [{ name: "oranges", quantity: 20 } ];
  };

  service.isEmptyToBuyList = function () {
    return (toBuyList.length == 0);
  };

  service.isEmptyAlreadyBoughtList = function () {
    return (alreadyBoughtList.length == 0);
  };
}

})();
