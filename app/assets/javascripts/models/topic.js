Labs.Topic = Labs.Commentable.extend({

  content: DS.attr("string"),

  part: DS.belongsTo("Labs.Part")

});
