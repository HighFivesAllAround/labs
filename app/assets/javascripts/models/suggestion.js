Labs.Suggestion = Labs.Commentable.extend({

  content: DS.attr("string"),

  part: DS.belongsTo("Labs.Part"),

});
