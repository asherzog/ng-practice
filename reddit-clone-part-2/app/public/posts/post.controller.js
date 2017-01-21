(function() {
  'use strict';

  angular
    .module('app')
    .controller('PostsController', PostsController);

  PostsController.$inject = ['$http']

  function PostsController($http, moment) {
    const vm = this;
    vm.showPost = false;
    vm.toggleComments = false;

    vm.$onInit = function() {
      $http.get('/api/posts')
            .then((response) => {
              vm.posts = response.data;
              vm.posts.forEach(post => {
                post.created_at = new Date(post.created_at);
              });
              console.log(vm.posts);
            });
    };

    vm.toggleForm = function() {
      vm.showPost = !vm.showPost;
    };

    vm.showComments = function(post) {
      post.toggleComments = true;
    };

    vm.upVoted = function(post) {
      for (var i = 0; i < vm.posts.length; i++) {
        if (vm.posts[i].id == post.id) {
          vm.posts[i].vote_count++;
          post = vm.posts[i];
          updateVotes(vm.posts[i].id, post);
        }
      }
    };
    vm.downVoted = function(post) {
      if (post.vote_count > 0) {
        for (var i = 0; i < vm.posts.length; i++) {
          if (vm.posts[i].id == post.id) {
            vm.posts[i].vote_count--;
            post = vm.posts[i];
            $http.delete(`/api/posts/${post.id}/votes`, post)
                  .then((response) => {
                    console.log(response);
                  });
          }
        }
      }
    };

    function updateVotes(id, votes) {
      $http.post(`/api/posts/${id}/votes`, votes)
            .then((response) => {
              console.log(response);
            });
    };

    vm.addComment = function(post) {
      console.log(post);
      let newComment = {
        content: post.newComment
      };
      delete post.newComment;
      $http.post(`/api/posts/${post.id}/comments`, newComment)
            .then((response) => {
              console.log(response);
              post.comments.push(newComment);
            });
    };

    vm.editPost = function(post) {
      console.log(post);
    }

  }
}());
