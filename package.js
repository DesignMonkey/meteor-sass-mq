Package.describe({
  name: 'designmonkey:sass-mq',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Media Query Sass library (Sass-mq) packed for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/DesignMonkey/meteor-sass-mq',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('fourseven:scss@3.2.0');
  api.imply('fourseven:scss@3.2.0');

  api.addFiles('lib/_sass-mq.scss', 'server', {addAssets: true});

});

Package.onTest(function(api) {
  //api.use('tinytest');
  //api.use('designmonkey:sass-mq');
  //api.addFiles('sass-mq-tests.js');

});
