Labs.ProjectIndexController = Ember.ObjectController.extend({

  postPageNumber: 1,
  postRequestsInFlight: 0,
  postTotalPages: null,

  actions: {
    loadMorePosts: function() {
      var self = this;
      var project = self.get("model");
      var pageKey = "postPageNumber";
      var flightKey = "postRequestsInFlight";

      if (self.get(flightKey)) { return; }
      else {
        self.set(flightKey, flightKey + 1);
        project.loadPosts(self.get("postPageNumber") + 1)
          .then(function(meta) {
            self.set("postPageNumber", meta.page);
            self.set("postTotalPages", meta.totalPages);
            self.set(flightKey, self.get(flightKey) - 1);
          });
      }
    }
  },

  onLastPostPage: function() {
    return this.get("postTotalPages") === this.get("postPageNumber");
  }.property("postTotalPages", "postPageNumber")

});
