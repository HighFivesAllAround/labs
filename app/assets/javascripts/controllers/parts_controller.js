Labs.PartsController = Ember.ArrayController.extend({

  needs: "project",
  project: null,
  projectBinding: "controllers.project",
  sortProperties: [ "id" ],
  sortAscending: true,

  actions: {
    create: function() {
      var self = this;
      var key = "createPartObserver";
      var project = this.get("project.model");
      var part = project.get("parts").createRecord({ title: "New Part" });
      part.save();
      part.addObserver("id", key, function() {
        part.removeObserver("id", key);
        self.transitionToRoute("part.index", part);
      });
    }
  }

});
