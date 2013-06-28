Labs.ProjectController = Ember.ObjectController.extend({

  createPart: function() {
    var self = this;
    var key = "createPartObserver";
    var project = this.get("model");
    var part = project.get("parts").createRecord({ title: "New Part" });
    part.save();
    part.addObserver("id", key, function() {
      part.removeObserver("id", key);
      self.transitionToRoute("part.index", part);
    });
  }

});
