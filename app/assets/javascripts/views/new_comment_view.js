Labs.NewCommentView = Ember.View.extend({

  templateName: "new_comment",

  commentBody: "",

  submit: function(e) {
    var commentable = this.get("controller.model");
    var comment = commentable.get("comments").createRecord({content: this.commentBody});
    comment.store.commit();
    this.set("commentBody", "");
  }

});
