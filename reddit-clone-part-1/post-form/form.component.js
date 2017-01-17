(function() {
  'use strict';

  angular
    .module('app')
    .component('newPostForm', {
      controller: function(moment) {
        const vm = this;


        vm.$onInit = function() {
          vm.toggle = false;

          vm.posts = [{
            id: 0,
            title: 'A Poem From Me',
            body: "The clang of swords is Thy wisdom, Before the new battalions, even unto the third and fourth Began eagerly to relate Places among the stars, And orange purple, I have seen a quarrel of the pines. The God of his inner thoughts. Shed no beams upon my weak heart. Hoarse, booming drums of the regiment, Thou art the enlivening milk for babes; Holding malice like a puppy, And the angels were puzzled Shortens tongues and lengthens arms. March the tools of nature's impulse, Aye, he was no bigger than my finger. Smote him, Ay, workman, make me a dream, There is wealth of golden sand Who sinned.",
            author: 'Stephen Crane',
            image: 'https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?h=350&auto=compress',
            votes: 5,
            time: new Date(),
            comments: []
          },
          {
            id: 1,
            title: 'Another Poem',
            body: "And Millamant and Romeo? O, it's die we must, but it's live we can, The worm Regret will canker on, You shall see her as a friend, The dark before and after. The Beggar packs beside the Beau; He's the ruffian on the stair. Gingerly she gains the door, He's the ruffian on the stair. So were it well to love, my love, The Fates are subtle girls! The Thunder huddles with the Snow. O gather me the rose, the rose, Gingerly she gains the door, The sunshine and the swallow, And what was his errand but hers and mine -- He's the ruffian on the stair. For summer smiles, but summer goes, They are with us like a disease: For David and for Saul, So were it well to love, my love, We caught at a mood as it passed in flight, For antidote and bane, The cloth of gold, the rare brocade, As they shoulder and clutch at the shrieking pane.",
            author: 'William Ernest Henley',
            image: 'https://images.pexels.com/photos/192439/pexels-photo-192439.jpeg?h=350&auto=compress',
            votes: 0,
            time: new Date(),
            comments: []
          }];
        };

        vm.toggleCreate = function() {
          vm.toggle = true;
        };

        vm.createNewPost = function() {
          vm.newPost = {
            id: vm.posts.length + 1,
            title: vm.post.title,
            body: vm.post.body,
            author: vm.post.author,
            image: vm.post.image,
            votes: 0,
            time: new Date(),
            comments: []
          };

          vm.posts.push(vm.newPost);
          delete vm.post;
          delete vm.newPost;
          vm.toggle = false;
        };

        vm.upVoted = function(post) {
          post.votes++;
        };

        vm.downVoted = function(post) {
          if (post.votes > 0) {
            post.votes--;
          }
        };

        vm.addComment = function(post) {
          post.comments.push(post.comment);
          delete post.comment;
        };
        


      },
      templateUrl: '../post-form/template.html'
    });
}());
