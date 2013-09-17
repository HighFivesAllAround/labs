Labs.Project = DS.Model.extend({

  name: DS.attr("string"),

  parts: DS.hasMany("Part"),
  posts: DS.hasMany("Post"),

  loadPosts: function(page) {
    page = page || 1;
    var self = this;
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      self.store.find("post", { project_id: self.get("id"), page: page })
        .then(function(posts) {
          self.get("posts").addObjects(posts);
          resolve(page + 1);
        }, function() { reject() });
      });

    return promise;
  }

});
