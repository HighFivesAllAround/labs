Labs.PartController = Ember.ObjectController.extend({

  resetTopic: function() {
    var part = this.get("model");
    var topic = part.get("topics").createRecord({content: part.get("content")});
    topic.save().then(function() {
      part.reload();
    });
  }

});
