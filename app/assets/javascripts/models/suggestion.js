Labs.Suggestion = Labs.Commentable.extend({

  content: DS.attr("string"),

  part: DS.belongsTo("Part"),
  project: DS.belongsTo("Project")

});
