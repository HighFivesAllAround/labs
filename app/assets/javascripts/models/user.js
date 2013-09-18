Labs.User = DS.Model.extend({

  username: DS.attr("string"),

  comments: DS.hasMany("comment"),
  versions: DS.hasMany("version"),
  suggestions: DS.hasMany("suggestion"),
  projects: DS.hasMany("project"),
  posts: DS.hasMany("post"),
  parts: DS.hasMany("part")

});
