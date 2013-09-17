Labs.PartSuggestionController = Ember.ObjectController.extend({

  needs: "part",
  part: null,
  model: {},
  partBinding: "controllers.part",

  actions: {
    create: function() {
      var self = this;
      var part = self.get("part.model");

      var suggestion = self.store.createRecord("suggestion", {
        content: self.get("model.content"),
        part: part
      });

      suggestion.save().then(function() {
        self.transitionToRoute("part.index");
      });
    },

    cancel: function() {
      this.get("controllers.part").set("editing", false);
      this.transitionToRoute("part.index");
    }
  }
});
