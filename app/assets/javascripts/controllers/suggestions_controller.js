Labs.SuggestionsController = Ember.ArrayController.extend({

  delete: function(suggestion) {
    suggestion.deleteRecord();
    suggestion.store.commit();
  }

});
