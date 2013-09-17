Labs.UnarchivedCommentController = Ember.ObjectController.extend({

  editing: false,

  actions: {
    archive: function() {
      var comment = this.get("model");
      comment.set("archived", true);
      comment.save();
    },

    delete: function() {
      var comment = this.get("model");
      comment.deleteRecord();
      comment.save();
    },

    edit: function() {
      this.set("editing", true);
    },

    update: function() {
      var self = this;
      var comment = self.get("model");
      comment.save().then(function() {
        self.set("editing", false);
      });
    },

    cancel: function() {
      this.set("editing", false);
    }
  }

});
