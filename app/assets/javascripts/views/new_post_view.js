Labs.NewPostView = Ember.View.extend({

  templateName: "posts/new",
  classNames: ["row"],

  postBody: "",

  isPreviewing: false,

  title: null,
  description: null,
  originalUrl: null,
  thumbnailUrl: null,
  html: null,

  urlRegexp: new RegExp(/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i),
  tid: null,
  inFlight: false,
  cache: {},

  keyDown: function(e) {
    var self = this;
    var tid = this.get("tid");

    clearTimeout(tid);

    this.set("tid", setTimeout(function() {
      var input = self.$("textarea").val();
      var matches = input.match(self.urlRegexp);

      if (matches && matches[0] && !self.get("inFlight")) {
        self.fetchPreviewableContent(matches[0]);
      }
    }, 2000));
  },

  submit: function(e) {
    e.preventDefault();
    this.get("controller").create({
      content: this.get("postBody"),
      title: this.get("title"),
      description: this.get("description"),
      originalUrl: this.get("originalUrl"),
      thumbnailUrl: this.get("thumnailUrl"),
      html: this.get("html")
    });
    this.set("postBody", "");
  },

  fetchPreviewableContent: function(embedUrl) {
    var self = this;
    this.set("isPreviewing", true);

    if (!this.get("inFlight")) {
      this.set("inFlight", true);
      $.embedly.oembed(embedUrl, {key: 'f3a6ced6ff1e4b9b964d8a6a73088200'}).progress(function(data) {
        self.set("inFlight", false);
        self.setProperties({
          title: data.title,
          description: data.description,
          originalUrl: data.original_url,
          thumbnailUrl: data.thumbnail_url,
          html: data.html
        });
      });
    }
  },

  postPreview: Ember.View.extend({

    classNames: ["row", "post-preview"],
    isVisible: false,

    showOnce: function() {
      this.set("isVisible", true);
      this.removeObserver("parentView.isPreviewing", this);
    }.observes("parentView.isPreviewing")

  })
});
