Labs.Project = DS.Model.extend({

  name: DS.attr("string"),

  parts: DS.hasMany("part"),
  posts: DS.hasMany("post"),

  loadPosts: function(page) {
    page = page || 1;
    var self = this;
    var promise = new Ember.RSVP.Promise(function(resolve, reject) {
      self.store.find("post", { project_id: self.get("id"), page: page })
        .then(function(posts) {
          var meta = self.store.metadataFor('post');
          self.get("posts").addObjects(posts);
          resolve({ page: meta.page, totalPages: meta.total_pages });
        }, function() { reject() });
      });

    return promise;
  }

});
