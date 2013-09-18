Labs.PostsController = Ember.ArrayController.extend({

  project: null,
  needs: "project",
  projectBinding: "controllers.project",

  sortProperties: ["id"],
  sortAscending: false,

  actions: {
    delete: function(post) {
      post.deleteRecord();
      post.save();
    }
  },

  create: function(attrs) {
    attrs.project = this.get("project.model");
    this.store.createRecord('post', attrs).save();
  }

});
