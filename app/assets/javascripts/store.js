$(function() {
  var token = $("meta[name='csrf-token']").attr("content");
  $.ajaxPrefilter(function(options, originalOptions, xhr) {
    xhr.setRequestHeader("X-CSRF-Token", token);
  });
});

DS.RESTAdapter = DS.RESTAdapter.extend({ namespace: "api" });

Labs.ApplicationSerializer = DS.ActiveModelSerializer;

Labs.Store = DS.Store.extend({
  adapter: "DS.RESTAdapter"
});
