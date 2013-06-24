Labs.PartsNewView = Ember.View.extend({
  create: function(event) {
    this.controller.create(this.get("title"));
  }
});
