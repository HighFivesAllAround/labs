Labs.CommentsController = Ember.ArrayController.extend({

  delete: function(comment) {
    comment.deleteRecord();
    comment.save();
  }

});
