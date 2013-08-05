//
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require showdown
//= require jquery.embedly
//= require moment
//= require spin
//
//= require_self
//
//= require ./duckpunch
//= require ./store
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./templates
//= require_tree ./helpers
//= require ./router
//
//
Labs = Ember.Application.create({
  LOG_TRANSITIONS: true
});

// Ember data doesn't do any error handling that would plug into a controller
window.jQuery(document).ajaxError(function(event, xhr, ajaxSettings, thrownError) {
  if (xhr.status === 401) {
    Labs.Router.router.transitionTo("login");
  }
});
