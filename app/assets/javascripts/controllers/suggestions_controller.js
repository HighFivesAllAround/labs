Labs.SuggestionsController = Ember.ArrayController.extend({

  actions: {
    delete: function(suggestion) {
      suggestion.deleteRecord();
      suggestion.store.commit();
    }
  }

});
