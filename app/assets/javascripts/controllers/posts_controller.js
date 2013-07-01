Labs.PostsController = Ember.ArrayController.extend({

  project: null,
  needs: "project",
  projectBinding: "controllers.project",

  sortProperties: ["id"],
  sortAscending: false,

  delete: function(post) {
    post.deleteRecord();
    post.save();
  },

  create: function(attrs) {
    this.get("project.posts").createRecord(attrs).save();
  }

});
