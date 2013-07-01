Labs.NewPostView = Ember.View.extend({

  templateName: "posts/new",

  postBody: "",

  submit: function(e) {
    e.preventDefault();
    this.get("controller").create({content: this.get("postBody")});
    this.set("postBody", "");
  }

});
