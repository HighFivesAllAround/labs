Labs.PartSuggestionController = Ember.ObjectController.extend({

  needs: "part",
  part: null,
  model: {},
  partBinding: "controllers.part",

  actions: {
    create: function() {
      var suggestion = this.get("part.model.suggestions").createRecord({ content: this.get("model.content") });
      suggestion.save();
      this.transitionToRoute("part.index");
    }
  }
});
