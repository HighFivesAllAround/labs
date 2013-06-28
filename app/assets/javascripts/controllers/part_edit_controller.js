Labs.PartEditController = Ember.ObjectController.extend({

  editableProperties: [ "title", "content" ],
  needs: "part",

  // Is this really necessary? linkTo helper blows up without it
  part: function() {
    return this.get("controllers.part.model");
  }.property(),

  save: function() {
    var model = this.get("part");
    var modelCopy = this.get("model");
    this.get("editableProperties").forEach(function(key) {
      model.set(key, modelCopy.get(key));
    });
    model.save();
    this.transitionToRoute("part.index");
  }

});
