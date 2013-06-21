$(function() {
  var token = $('meta[name="csrf-token"]').attr('content');
  $.ajaxPrefilter(function(options, originalOptions, xhr) {
    xhr.setRequestHeader('X-CSRF-Token', token);
  });
});

DS.RESTAdapter.configure("Labs.Suggestion", { alias: "Suggestion" });
DS.RESTAdapter.configure("Labs.Part", { alias: "Part" });

DS.RESTAdapter = DS.RESTAdapter.extend({ namespace: "api" });

Labs.Store = DS.Store.extend({
  revision: 12,
  adapter: "DS.RESTAdapter"
});
