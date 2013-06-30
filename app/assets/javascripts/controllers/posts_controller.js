Labs.PostsController = Ember.ArrayController.extend({

  delete: function(post) {
    post.deleteRecord();
    post.store.commit();
  }

});
