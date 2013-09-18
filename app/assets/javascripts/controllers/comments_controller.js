Labs.CommentsController = Ember.ArrayController.extend({

  actions: {
    delete: function(comment) {
      comment.deleteRecord();
      comment.save();
    }
  }

});
