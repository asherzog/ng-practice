(function() {
  'use strict'

  angular.module('app', [])
    .component('cart', {
      controller: function() {
        const vm = this;

        vm.$onInit = function() {
          vm.items = [{name: 'thing', quantity: 2}, {name: 'another thing', quantity: 1}];
        };

        vm.addItem = function() {
          vm.items.push(vm.item);
          delete vm.item;
        };

        vm.removeItem = function(e, item) {
          e.preventDefault();
          vm.items.splice(vm.items.indexOf(item), 1);
        };

      },
      template: `
      <form ng-submit="$ctrl.addItem()">
        <p>
          <label for="name">Name</label>
          <input id="name" ng-model="$ctrl.item.name">
        </p>
        <p>
          <label for="quantity">Quantity</label>
          <input id="quantity" ng-model="$ctrl.item.quantity">
        </p>
        <p>
          <button type="submit">Add Item</button>
        </p>
      </form>

      <div class="item" ng-repeat="item in $ctrl.items">
        <p>{{item.name}} {{item.quantity}}
        <a href="#" ng-click="$ctrl.removeItem($event, item)">Delete</a>
      </div>
      `
    });
}());
