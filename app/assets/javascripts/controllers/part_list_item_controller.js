Labs.PartListItemController = Ember.ObjectController.extend({

  editMode: false,

  toggleEditMode: function() {
    this.set("editMode", !this.get("editMode"));
  },

  update: function() {
    this.get("model").store.commit();
  }

});
