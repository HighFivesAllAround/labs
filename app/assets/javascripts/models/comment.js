Labs.Comment = DS.Model.extend({
  content: DS.attr("string"),
  commentable: DS.belongsTo("Labs.Commentable", { polymorphic: true })
});
