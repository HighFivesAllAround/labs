Labs.Version = Labs.Commentable.extend({

  content: DS.attr("string"),

  part: DS.belongsTo("Part")

});
