Labs.Post = Labs.Commentable.extend({

  content: DS.attr("string"),

  title: DS.attr('string'),
  description: DS.attr('string'),
  original_url: DS.attr('string'),
  thumbnail_url: DS.attr('string'),
  html: DS.attr('string'),

  project: DS.belongsTo("Labs.Project")

});
