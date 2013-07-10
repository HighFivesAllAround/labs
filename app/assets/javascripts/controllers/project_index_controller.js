Labs.ProjectIndexController = Ember.ObjectController.extend({

  postPageNumber: 0,
  postRequestsInflight: 0,
  postRequestsQueued: 0,

  loadPostsObserver: function() {
    var self = this;
    var inFlight = this.get("postRequestsInflight");
    var queued = this.get("postRequestsQueued");
    if (inFlight || queued === 0) { return; }

    this.set("postRequestsInflight", inFlight + 1);
    this.get("model").onLoad(function(model) {
      var page = self.get("postPageNumber") + 1;
      self.set("postPageNumber", page);
      Labs.Post.find({ project_id: model.get("id"), page: page }).onLoad(function(posts) {
        posts.forEach(function(post) {
          model.get("posts").pushObject(post);
        });
        self.set("postRequestsQueued", self.get("postRequestsQueued") - 1);
        self.set("postRequestsInflight", self.get("postRequestsInflight") - 1);
      });
    });
  }.observes("postRequestsInflight", "postRequestsQueued"),

  loadMorePosts: function() {
    this.set("postRequestsQueued", this.get("postRequestsQueued") + 1);
  }

});
