
/**
 * Module dependencies.
 */

var fs = require('fs');
var co = require('co');

/**
 * Do stuff.
 */

co(function *() {
  // Read data from tinder.txt
  var data = fs.readFileSync('tinder.txt');

  // Turn data to JS object.
  data = JSON.parse(data);

  // Do cool stuff!
  console.log(data);

  /**
   * Add code here.
   */

});
