(function() {
  'use strict';

  angular
    .module('app')
    .component('posts', {
      controller: 'PostsController',
      templateUrl: '../posts/template.html'
    });
}());
