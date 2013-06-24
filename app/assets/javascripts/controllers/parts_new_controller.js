Labs.PartsNewController = Ember.ObjectController.extend({

  needs: "project",

  create: function(title) {
    var project = this.get("controllers.project.model");
    project.get("parts").createRecord({ title: title }).save();
    this.transitionToRoute("project.index", project);
  }

});
