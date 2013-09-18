Labs.NewCommentView = Ember.View.extend({

  templateName: "comments/new",

  commentBody: "",

  // NOTE: Yes, it's a little weird to be creating this in the view. However,
  // it's the only place we can currently know the controller of the item
  // being commented on (polymorphic). Chose this over code duplication. Still
  // feels as though there is a better way.
  //
  submit: function(e) {
    e.preventDefault();
    var self = this;
    var comment = Labs.Comment.store.createRecord("comment", {
      content: self.commentBody,
      commentable: self.get("controller.model")
    });

    comment.save().then(function() {
      self.set("commentBody", "");
    });
  }

});
