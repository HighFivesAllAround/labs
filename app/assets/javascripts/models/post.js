Labs.Post = Labs.Commentable.extend({

  content: DS.attr("string"),

  project: DS.belongsTo("Labs.Project"),

});
