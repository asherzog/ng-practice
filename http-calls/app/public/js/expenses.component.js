(function() {
  'use strict'

  angular.module('app')
    .component('expenses', {
      controller: controller,
      templateUrl: '../templates/expenses.html'
    });
  controller.$inject = ['$http']


  function controller($http) {
    const vm = this;

    vm.$onInit = function() {
      $http.get('/api/expenses')
            .then((results) => {
              vm.expenses = results.data;
            });
    };

    vm.addExpense = function() {
      $http.post('/api/expenses', vm.expense)
            .then((response) => {
              vm.expenses.push(response.data);

            });
    };

    vm.updateExpenseFields = function(expense) {
      vm.editCategory = expense.category;
      vm.editAmount = expense.amount;
      vm.id = expense.id;

      vm.updateExpense = function() {
        vm.newExpense = {
          category: vm.editCategory,
          amount: vm.editAmount
        };
        $http.patch(`/api/expenses/${vm.id}`, vm.newExpense)
              .then((response) => {
                for (var i = 0; i < vm.expenses.length; i++) {
                  if (vm.expenses[i].id == response.data.id) {
                    vm.expenses[i] = response.data;
                  }
                }
                delete vm.editCategory;
                delete vm.editAmount;
              });
      };
    };



    vm.deleteExpense = function(expense) {
      $http.delete(`/api/expenses/${expense.id}`)
            .then((response) => {
              vm.expenses.splice(vm.expenses.indexOf(expense),1);
            });
    };
  }

}());
