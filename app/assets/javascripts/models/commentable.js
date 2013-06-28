Labs.Commentable = DS.Model.extend({
  comments: DS.hasMany("Labs.Comment")
});
