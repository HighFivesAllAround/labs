Labs.PartController = Ember.ObjectController.extend({

  resetTopic: function() {
    var part = this.get("model");
    var topic = part.get("topics").createRecord({content: part.get("content")});
    topic.save().then(function() {
      part.reload();
    });
  },

  showAllComments: function() {
    var part = this.get("model");
    var comments = Labs.Comment.find({comment: {commentable_id: part.get("id"), commentable_type: "Part"}});
    part.set("comments", comments);
  }

});
