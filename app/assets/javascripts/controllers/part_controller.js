Labs.PartController = Ember.ObjectController.extend({

  actions: {
    createVersion: function() {
      var self = this;
      var part = self.get("model");
      var version = self.store.createRecord("version", {
        content: part.get("content"),
        part: part
      });

      version.save().then(function() {
        part.reload();
      });
    }
  }

});
