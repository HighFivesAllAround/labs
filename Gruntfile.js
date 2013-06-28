var jshintOptions = {
  bitwise: true,
  camelcase: false,
  curly: true,
  eqeqeq: true,
  forin: true,
  immed: true,
  indent: 2,
  latedef: true,
  newcap: true,
  noarg: true,
  noempty: true,
  nonew: true,
  quotmark: "double",
  undef: true,
  unused: "vars",
  trailing: true,
  scripturl: true,
  strict: false,
  white: false,
  globals: {
    Ember: true,
    Labs: true,
    DS: true,
    Showdown: true,
    $: true
  },
  browser: true
};


module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      browser: {
        options: jshintOptions,
        files: [
          { src: [ "app/assets/javascripts/**/*.js", "!app/assets/javascripts/vendor/**/*" ]}
        ]
      }
    },
    watch: {
      jshint: {
        files: "app/assets/javascripts/**/*.js",
        tasks: "jshint"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
};
