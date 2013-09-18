Labs.Comment = DS.Model.extend({
  content: DS.attr("string"),
  archived: DS.attr("boolean"),
  createdAt: DS.attr("date"),
  commentable: DS.belongsTo("commentable", { polymorphic: true }),

  timeAgo: function() {
    return window.moment(this.get("createdAt")).fromNow();
  }.property(),

  domId: function() {
    return "comment-" + this.get("id");
  }.property(),

  anchor: function() {
    return "#" + this.get("domId");
  }.property()
});
