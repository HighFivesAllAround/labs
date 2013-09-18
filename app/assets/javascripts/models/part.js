Labs.Part = Labs.Commentable.extend({

  title: DS.attr("string"),
  content: DS.attr("string"),

  project: DS.belongsTo("project"),
  user: DS.belongsTo("user"),
  suggestions: DS.hasMany("suggestion"),
  versions: DS.hasMany("version")

});
