Labs.Part = Labs.Commentable.extend({

  title: DS.attr("string"),
  content: DS.attr("string"),

  project: DS.belongsTo("Project"),
  suggestions: DS.hasMany("Suggestion"),
  versions: DS.hasMany("Version")

});
