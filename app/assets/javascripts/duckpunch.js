(function() {
  Ember.DeferredMixin.reopen({
    onLoad: function(callback) {
      if (this.get("isLoaded")) {
        callback(this);
      } else {
        this.one("didLoad", callback.bind(this, this));
      }
    }
  });
})();
