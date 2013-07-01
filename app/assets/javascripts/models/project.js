Labs.Project = DS.Model.extend({

  name: DS.attr("string"),

  parts: DS.hasMany("Labs.Part"),

  sortedParts: function() {
    return Ember.ArrayProxy.create({
      content: this.get("parts").toArray().sort(function(a, b) {
        return a.id - b.id;
      })
    });
  }.property("parts")

});
