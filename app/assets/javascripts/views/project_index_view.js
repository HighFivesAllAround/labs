Labs.ProjectIndexView = Ember.View.extend({

  templateName: "project/index",
  didInsertElement: function() {
    this.set("controller.postRequestsQueued", 1);
  },
  addPostsObserer: function() {
    // Load more until content goes off the screen
    if (document.body.scrollHeight > document.body.offsetHeight) {
      if (this.get("controller.postRequestsQueued") === 0) {
        this.set("controller.postRequestsQueued", 1);
      }
    }
  }.observes("controller.model.posts.length")

});
