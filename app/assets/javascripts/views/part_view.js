Labs.PartView = Ember.View.extend({
  toggleTitleEdit: function() {
    this.set("titleCopy", this.get("controller.model.title"));
    this.set("editingTitle", !this.get("editingTitle"));
  },
  save: function() {
    this.get("controller").save({ title: this.get("titleCopy") });
  }
});
