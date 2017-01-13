(function() {
  var imgNames = ['birds', 'land', 'pipe1', 'pipe2', 'sky'];

  var imgSrcs = imgNames.map(function(val) {
    return {
      name: val,
      src: './img/' + val + '.png'
    };
  });

  module.exports = {
    imgSrcs: imgSrcs,
    bgSpeed: 0.15,
    fallSpeed: 150,
    raiseSpeed: 0.3
  };
}).call(this);
