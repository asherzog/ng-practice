(function() {
  'use strict';

  angular
    .module('app')
    .controller('editController', editController);

    editController.$inject = ['$http'];

    function editController($http, houseService, $stateParams) {
      const vm = this;

      vm.$onInit = function() {
        console.log($stateParams);
        // $http.get(`/api/posts/${}`)
      }


    }
}());
