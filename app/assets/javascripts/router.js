Labs.Router.reopen({ location: "history" });

// Route Definitions
//

Labs.Router.map(function() {

  this.resource("project", { path: "/projects/:project_id" }, function() {
    this.resource("part", { path: "/parts/:part_id" }, function() {
      this.route("edit");
      this.route("suggestion");
    });
    this.resource("suggestion", { path: "/suggestions/:suggestion_id" });
  });

});


// Routes
//

Labs.IndexRoute = Ember.Route.extend({
  redirect: function() {
    var self = this;
    Labs.Project.find({}).then(function(projects) {
      self.transitionTo("project.index", projects.toArray()[0]);
    });
  }
});

Labs.ProjectIndexRoute = Ember.Route.extend({
  model: function() { return this.modelFor("project"); },
});

Labs.PartIndexRoute = Ember.Route.extend({
  model: function() { return this.modelFor("part"); },
});

Labs.PartEditRoute = Ember.Route.extend({
  activate: function() {
    var partController = this.controllerFor("part");
    var editController = this.controllerFor("part.edit");
    partController.set("editing", true);
    partController.get("model").then(function(model) {
      var modelCopy = Ember.Object.create();
      editController.get("editableProperties").forEach(function(key) {
        modelCopy.set(key, model.get(key));
      });
      editController.set("model", modelCopy);
    });
  },
  deactivate: function() {
    this.controllerFor("part").set("editing", false);
  }
});

Labs.PartSuggestionRoute = Ember.Route.extend({
  activate: function() {
    var partController = this.controllerFor("part");
    partController.set("editing", true);
  },
  deactivate: function() {
    var partController = this.controllerFor("part");
    partController.set("editing", false);
  },
  setupController: function() {
    var controller = this.get("controller");
    var content = controller.get("controllers.part.model.content");
    controller.set("model", { content: content });
  }
});
