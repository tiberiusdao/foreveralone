
/**
 * Module dependencies.
 */

var render = require('../lib/render');
var Tinder = require('../lib/tinder');
var report = require('../lib/report');

/**
 * Render index html page.
 */

exports.index = function *index() {
  this.body = yield render('index');
};

/**
 * Render the report.
 */

exports.report = function *report() {
  var data = this.request.query;
  this.body = yield render('report', { data: data });
};

/**
 * Submit.
 */

exports.submit = function *submit() {
  var user = this.request.body;
  if (!user) return this.body = 'No user.';
  var tinder = new Tinder(user.tinderId, user.tinderToken);
  yield tinder.authenticate();
  user = yield tinder.getHistory();
  var data = report(user);
  // turn data to qs
  return redirect('/r/' + qs);
};
