require('./style.scss');
var FlappyBird = require('./js/flappybird.js');

window.onload = function() {
  var game = FlappyBird('flappy-canvas');
  game.ready();
};
