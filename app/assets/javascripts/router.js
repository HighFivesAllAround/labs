Labs.Router.reopen({ location: 'history' });

// Route Definitions
//

Labs.Router.map(function() {

  this.resource("project", { path: "/projects/:project_id" }, function() {
    this.resource("part", { path: "/parts/:part_id" }, function() {
      this.route("revise");
      this.route("new");
    });
    this.resource("suggestion", { path: "/suggestions/:suggestion_id" });
  });

});


// Routes
//

Labs.IndexRoute = Ember.Route.extend({
  redirect: function() {
    var projects = Labs.Project.find({})
    var self = this;
    projects.on("didLoad", function() {
      self.transitionTo('project', projects.toArray()[0]);
    });
  }
});

Labs.PartIndexRoute = Ember.Route.extend({
  model: function() { return this.modelFor("part"); },
});

Labs.PartNewRoute = Ember.Route.extend({
  model: function() {
    return Labs.Part.createRecord({});
  }
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
