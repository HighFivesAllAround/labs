Labs.PartEditController = Ember.ObjectController.extend({

  editableProperties: [ "title", "content" ],
  needs: "part",
  model: {},
  part: null,

  actions: {
    save: function() {
      var self = this;
      var model = self.get("controllers.part.model");
      var modelCopy = self.get("model");
      self.get("editableProperties").forEach(function(key) {
        model.set(key, modelCopy.get(key));
      });
      model.save().then(function() {
        self.transitionToRoute("part.index");
      });
    },

    destroy: function() {
      var self = this;
      var model = self.get("controllers.part.model");
      model.deleteRecord();
      model.save().then(function() {
        self.transitionToRoute("project.index");
      });
    },

    cancel: function() {
      this.get("controllers.part").set("editing", false);
      this.transitionToRoute("part.index");
    }
  }

});
