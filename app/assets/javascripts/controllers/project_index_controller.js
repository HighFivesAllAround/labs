Labs.ProjectIndexController = Ember.ObjectController.extend({

  postPageNumber: 1,
  postRequestsInFlight: 0,

  actions: {
    loadMorePosts: function() {
      var self = this;
      var project = self.get("model");
      var pageKey = "postPageNumber";
      var flightKey = "postRequestsInFlight";

      if (self.get(flightKey)) { return; }
      else {
        self.set(flightKey, flightKey + 1);
        project.loadPosts(self.get(pageKey)).then(function(nextPageNum) {
          self.set(pageKey, nextPageNum);
          self.set(flightKey, self.get(flightKey) - 1);
        });
      }
    }
  }

});
