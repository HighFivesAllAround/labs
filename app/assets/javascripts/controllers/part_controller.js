Labs.PartController = Ember.ObjectController.extend({

  actions: {
    createVersion: function() {
      var part = this.get("model");
      var version = part.get("versions").createRecord({content: part.get("content")});
      version.save().then(function() {
        part.reload();
      });
    }
  }

});
