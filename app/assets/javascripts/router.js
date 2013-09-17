Labs.Router.reopen({ location: "history" });

// Route Definitions
//

Labs.Router.map(function() {

  this.resource("login");
  this.resource("project", { path: "/projects/:project_id" }, function() {
    this.resource("part", { path: "/parts/:part_id" }, function() {
      this.route("edit");
      this.route("suggestion");
    });
    this.resource("suggestion", { path: "/suggestions/:suggestion_id" });
    this.resource("version", { path: "/versions/:version_id" });
  });

});


// Routes
//

Labs.ProjectIndexRoute = Ember.Route.extend({
  model: function() { return this.modelFor("project") },
  setupController: function(ctrl, model) {
    ctrl.set("model", model);
    model.loadPosts(ctrl.get("postPageNumber"))
      .then(function(nextPageNum) {
        ctrl.set("postPageNumber", nextPageNum);
      });
  }
});

Labs.PartIndexRoute = Ember.Route.extend({
  model: function() { return this.modelFor("part"); }
});

Labs.PartEditRoute = Ember.Route.extend({
  activate: function() {
    var partController = this.controllerFor("part");
    var editController = this.controllerFor("part.edit");
    partController.set("editing", true);
    partController.get("model").onLoad(function(model) {
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
