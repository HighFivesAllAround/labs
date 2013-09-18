Labs.Suggestion = Labs.Commentable.extend({

  content: DS.attr("string"),

  part: DS.belongsTo("part"),
  project: DS.belongsTo("project")

});
