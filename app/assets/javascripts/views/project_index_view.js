Labs.ProjectIndexView = Ember.View.extend({

  templateName: "project/index",
  didInsertElement: function() {
    this.get("controller").loadMorePosts();
  },
  addPostsObserver: function() {
    // Load more until content goes off the screen
    if (document.body.offsetHeight < window.screen.height) {
      this.get("controller").loadMorePosts();
    }
  }.observes("controller.model.posts.length")

});
