require('./style.scss');
var FlappyBird = require('./js/flappybird.js');

window.onload = function() {
  var game = new FlappyBird('canvas');

  game.start();
};
