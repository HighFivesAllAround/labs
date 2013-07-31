Labs.CommentsController = Ember.ArrayController.extend({

  filteredComments: function() {
    return this.get('content').filterProperty('archived', false);
  }.property("content.@each.archived"),

  delete: function(comment) {
    comment.deleteRecord();
    comment.save();
  },

  archive: function(comment) {
    comment.set("archived", true);
    comment.save();
  }

});
