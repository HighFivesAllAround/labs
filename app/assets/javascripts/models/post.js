Labs.Post = DS.Model.extend({

  content: DS.attr("string"),

  project: DS.belongsTo("Labs.Project")

});
