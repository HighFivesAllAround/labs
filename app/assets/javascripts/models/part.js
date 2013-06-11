Labs.Part = Labs.Commentable.extend({

  title: DS.attr("string"),
  content: DS.attr("string"),

  project: DS.belongsTo("Labs.Project"),
  suggestions: DS.hasMany("Labs.Suggestion")

});
