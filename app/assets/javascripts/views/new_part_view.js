Labs.NewPartView = Ember.View.extend({

  templateName: "new_part",

  partName: "",

  isVisible: function() {
    return this.get("controller.addingNewPart");
  }.property("controller.addingNewPart"),

  submit: function(e) {
    var part = Labs.Part.createRecord({title: this.get("partName")});
    this.get("controller.content").addObject(part);
    part.store.commit();
    this.set("partName", "");
    this.set("controller.addingNewPart", false);
  }

});
