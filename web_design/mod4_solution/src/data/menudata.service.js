(function(){
'use strict';

angular.module('Data')
.constant('BaseApiUrl', 'https://davids-restaurant.herokuapp.com')
.service('DataService', DataService)
.controller('TestController', TestController);

DataService.$inject = ['$http', 'BaseApiUrl'];
function DataService($http, BaseApiUrl) {
    var service = this;
   console.log('here 1');

    service.getAllCategories = function() {
        var url = BaseApiUrl + '/categories.json';
        console.log(url);
        return $http.get(url).then(
            function(response){
                console.log('here 2');
                    console.log(response.data);
                    console.log(response.data.length);
                return response.data;
            }
        );
    };

    service.getItemsForCategory = function(categorySN) {

        return $http({
          method: "GET",
          url: BaseApiUrl + '/menu_items.json',
          params: {
              category: categorySN
          }
        }).then(
            function(response) {
                            console.log('get items');
           console.log(response.data.menu_items);
            return response.data.menu_items;
        });

    };

}


TestController.$inject= ['DataService'];
function TestController(DataService) {
    var test = this;

    var aPromise = DataService.getItemsForCategory('A');

    test.message ="a test";
}

})();
