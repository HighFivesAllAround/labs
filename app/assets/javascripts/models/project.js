Labs.Project = DS.Model.extend({

  name: DS.attr("string"),

  parts: DS.hasMany("Labs.Part"),
  posts: DS.hasMany("Labs.Post"),

});
