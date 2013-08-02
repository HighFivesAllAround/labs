Labs.CommentsController = Ember.ArrayController.extend({

  archive: function(comment) {
    comment.set("archived", true);
    comment.save();
  },

  delete: function(comment) {
    comment.deleteRecord();
    comment.save();
  }

});

Labs.UnarchivedCommentsController = Labs.CommentsController.extend({

  filteredComments: function() {
    return this.get('content').filterProperty('archived', false);
  }.property("content.@each.archived"),

});
