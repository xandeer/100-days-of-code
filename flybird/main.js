require('./style.scss');
var Fly = require('./js/fly.js');

window.onload = function() {
  var fly = new Fly('canvas');

  fly.start();
};
