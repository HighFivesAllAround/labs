Labs.ProjectIndexController = Ember.ObjectController.extend({

  postPageNumber: 0,
  postRequestsInFlight: 0,

  loadMorePosts: function() {
    var self      = this;
    var flightKey = "postRequestsInFlight";
    var pageKey   = "postPageNumber";
    // this.get("model").onLoad(function(model) {
    //   if (self.get(flightKey)) { return; }
    //   self.set(flightKey, self.get(flightKey) + 1);
    //   self.set(pageKey, self.get(pageKey) + 1);
    //   Labs.Post.find({ project_id: model.get("id"), page: self.get(pageKey) }).onLoad(function(posts) {
    //     posts.forEach(function(post) {
    //       model.get("posts").pushObject(post);
    //     });
    //     self.set(flightKey, self.get(flightKey) - 1);
    //   });
    // });
  }

});
