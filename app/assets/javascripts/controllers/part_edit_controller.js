Labs.PartEditController = Ember.ObjectController.extend({

  editableProperties: [ "title", "content" ],
  needs: "part",
  model: {},
  part: null,

  actions: {
    save: function() {
      var model = this.get("controllers.part.model");
      var modelCopy = this.get("model");
      this.get("editableProperties").forEach(function(key) {
        model.set(key, modelCopy.get(key));
      });
      model.save();
      this.transitionToRoute("part.index");
    },

    destroy: function() {
      var model = this.get("controllers.part.model");
      model.deleteRecord();
      model.save();

      this.transitionToRoute("project.index");
    }
  }

});
