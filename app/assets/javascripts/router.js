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
  model: function() {
    var part = this.modelFor("part");
    var partCopy = Ember.Object.create();
    var ctrl = this.controllerFor("part.edit");

    ctrl.get("editableProperties").forEach(function(key) {
      partCopy.set(key, part.get(key));
    });

    ctrl.set("model", partCopy);
  },

  setupController: function(ctrl, model) {
    this.controllerFor("part").set("editing", true);
  }
});

Labs.PartSuggestionRoute = Ember.Route.extend({
  setupController: function() {
    this.controllerFor("part").set("editing", true);
    var controller = this.get("controller");
    var content = controller.get("controllers.part.model.content");
    controller.set("model", { content: content });
  }
});
