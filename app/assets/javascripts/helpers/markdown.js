var showdown = new Showdown.converter();

Ember.Handlebars.registerBoundHelper("markdown", function(input) {
  if (!input) { return ""; }
  return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
});
