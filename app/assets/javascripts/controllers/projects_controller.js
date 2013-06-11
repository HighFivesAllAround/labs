Labs.ProjectsNewController = Ember.ObjectController.extend({
  create: function() {
    Labs.Store.POST("projects", this.content, $.proxy(function() {
      this.transitionToRoute("projects.index");
    }, this));
  }
});
