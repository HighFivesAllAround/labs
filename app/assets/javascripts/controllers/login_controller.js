Labs.LoginController = Ember.ObjectController.extend({
  error: null,
  username: null,
  password: null,
  inFlight: false,

  login: function() {
    this.set("error", null);
    this.set("inFlight", true);
    Ember.$.ajax({
      contentType: "application/json",
      url: "/api/sessions",
      type: "POST",
      dataType: "json",
      data: JSON.stringify(this.getProperties("username", "password"))
    }).then(this.success.bind(this), this.failure.bind(this));
  },

  success: function() {
    this.set("inFlight", false);
    this.transitionToRoute("index");
  },

  failure: function(xhr) {
    this.set("inFlight", false);
    if (xhr.status === 403) {
      this.set("error", "Invalid password");
    } else if (xhr.status === 404) {
      this.set("error", "Unknown email");
    } else {
      this.set("error", "Herp derp, something went wrong");
    }
  }
});
