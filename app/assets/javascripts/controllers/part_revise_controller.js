Labs.PartReviseController = Ember.ObjectController.extend({

  needs: ["part"],

  part: function() {
    return this.get("controllers.part.model");
  }.property(),

  createRevision: function() {
    var suggestion = this.get("model");
    this.get("part.suggestions").addObject(suggestion);
    suggestion.store.commit();
    this.transitionToRoute("part.index", this.get("part"));
  }

});
