Labs.NewPostView = Ember.View.extend({

  templateName: "posts/new",
  classNames: ["row"],

  postBody: "",

  urlRegexp: new RegExp(/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i),
  tid: null,
  inFlight: false,
  isPreviewing: false,

  title: null,
  description: null,
  originalUrl: null,
  thumbnailUrl: null,
  html: null,

  willInsertElement: function() {
    this.addObserver("postBody", this, "previewUrlObserver");
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
    this.resetForm();
  },

  previewUrlObserver: function(e) {
    var self = this;
    var tid = this.get("tid");
    clearTimeout(tid);
    this.set("tid", setTimeout(function() {
      var matches = self.get("postBody").match(self.urlRegexp);
      if (matches && matches[0] && !self.get("inFlight")) {
        self.fetchPreviewableContent(matches[0]);
      }
    }, 2000));
  },

  fetchPreviewableContent: function(embedUrl) {
    var self = this;
    this.set("isPreviewing", true);
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
  },

  resetForm: function() {
    this.setProperties({postBody: "", inFlight: false, isPreviewing: false});
    this.clearMetadata();
    this.addObserver("postBody", this, "previewUrlObserver");
  },

  cancelPreview: function() {
    this.removeObserver("postBody", this, "previewUrlObserver");
    this.setProperties({isPreviewing: false, inFlight: false});
    this.clearMetadata();
  },

  clearMetadata: function() {
    this.setProperties({
      title: null,
      description: null,
      originalUrl: null,
      thumbnailUrl: null,
      html: null,
    });
  },

  postPreview: Ember.View.extend({

    classNames: ["row", "post-preview"],
    spinner: new Spinner(),

    isVisible: function() {
      return this.get("parentView.isPreviewing");
    }.property("parentView.isPreviewing"),

    cancel: function() {
      this.get("parentView").cancelPreview();
    },

    loading: function() {
      var spinner = this.get("spinner");
      if (this.get("parentView.inFlight")) {
        spinner.spin(this.$()[0]);
      } else {
        spinner.stop();
      }
    }.observes("parentView.inFlight"),
  })
});
