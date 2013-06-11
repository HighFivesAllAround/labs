Labs.PartsController = Ember.ArrayController.extend({

  addingNewPart: false,

  toggleNewPart: function() {
    this.set("addingNewPart", !this.get("addingNewPart"));
  },

  delete: function(part) {
    part.deleteRecord();
    part.store.commit();
  }

});
