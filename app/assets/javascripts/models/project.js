Labs.Project = DS.Model.extend({

  name: DS.attr("string"),

  parts: DS.hasMany("Part"),
  posts: DS.hasMany("Post"),

});
