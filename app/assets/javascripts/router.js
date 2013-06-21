// Route Definitions
//

Labs.Router.map(function() {

  this.resource("project", { path: "/projects/:project_id" }, function() {
    this.resource("part", { path: "/parts/:part_id" }, function() {
      this.route("revise");
    });
    this.resource("suggestion", { path: "/suggestions/:suggestion_id" });
  });

});


// Routes
//

Labs.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('projects');
  }
});

Labs.ProjectsNewRoute = Ember.Route.extend({
  model: function() {
    return Labs.Project.create({ parts: [] });
  }
});

Labs.PartIndexRoute = Ember.Route.extend({
  model: function () { return this.modelFor("part"); },
});

Labs.PartReviseRoute = Ember.Route.extend({
  setupController: function() {
    var part = this.modelFor("part");

    var suggestion = Labs.Suggestion.createRecord({
      project: this.modelFor("project"),
      part: part,
      content: part.get("content")
    });

    this.set("controller.model", suggestion);
  }
});

