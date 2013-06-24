Labs.PartController = Ember.ObjectController.extend({
  save: function(attributes) {
    var model = this.get("model");
    model.setProperties(attributes);
    model.save();
  }
});
