Labs.PartsController = Ember.ArrayController.extend({

  needs: "project",
  project: null,
  projectBinding: "controllers.project",
  sortProperties: [ "id" ],
  sortAscending: true,

  actions: {
    create: function() {
      var self = this;
      var project = self.get("project.model");
      var part = self.store.createRecord('part', {title: "New Part", project: project});

      part.save().then(function() {
        self.transitionToRoute("part.index", part);
      });
    }
  }

});
