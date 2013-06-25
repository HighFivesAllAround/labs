Labs.ProjectController = Ember.ObjectController.extend({

  createPart: function() {
    var self = this;
    var project = this.get("model");
    var part = project.get("parts").createRecord({ title: "New Part" });
    part.save();
    function callback() {
      part.removeObserver("id", callback);
      self.transitionToRoute("part.index", part);
    }
    part.addObserver("id", callback);
  }

});
