Labs.NewCommentView = Ember.View.extend({

  templateName: "comments/new",

  commentBody: "",

  // NOTE: Yes, it's a little weird to be creating this in the view. However,
  // it's the only place we can currently know the controller of the item
  // being commented on (polymorphic). Chose this over code duplication. Still
  // feels as though there is a better way.
  //
  submit: function(e) {
    var commentable = this.get("controller.model");
    var comment = commentable.get("comments").createRecord({content: this.commentBody});
    comment.save();
    this.set("commentBody", "");
  }

});
