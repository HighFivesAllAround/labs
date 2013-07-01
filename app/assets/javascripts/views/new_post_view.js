Labs.NewPostView = Ember.View.extend({

  templateName: "posts/new",

  postBody: "",

  // oembed metadata properties
  title: null,
  description: null,
  original_url: null,
  thumbnail_url: null,
  html: null,

  isPreviewing: false,

  keyDown: function(e) {
    var expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i;
    var regex = new RegExp(expression);
    var input = this.$().val();
    var matches = input.match(regex);

    if (matches && matches[0]) {
      this.set("isPreviewing", true);
      this.fetchOembedData(matches[0]);
    }
  },

  submit: function(e) {
    e.preventDefault();
    this.get("controller").create({content: this.get("postBody")});
    this.set("postBody", "");
  },

  fetchOembedData: function(embedUrl) {
    $.embedly.oembed(embedUrl, {key: 'f3a6ced6ff1e4b9b964d8a6a73088200'}).progress(function(data) {
      this.setProperties({
        title: data.title,
        description: data.description,
        original_url: data.original_url,
        thumbnail_url: data.thumbnail_url,
        html: data.html
      });
    });
  },

  postPreview: Ember.View.extend({

    isVisible: false,

    showOnce: function() {
      this.set("isVisible", true);
      this.removeObserver("parentView.isPreviewing", this);
    }.observes("parentView.isPreviewing")

  })
});
