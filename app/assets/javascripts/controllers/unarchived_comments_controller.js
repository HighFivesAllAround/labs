Labs.UnarchivedCommentsController = Ember.ArrayController.extend({

  filteredComments: function() {
    return this.get('content').filterProperty('archived', false);
  }.property("content.@each.archived"),

});
