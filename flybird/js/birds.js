(function() {
  function Bird() {
    this.maxSpeed = 0.5;
    this.maxAngle = 30;

    this.index = 0;
    // acceleration
    this.a = 0.0005;
    // the bird's position
    this.x = 100;
    this.y = 100;
    // When the bird is falling, it's head should head over heels,
    // and when it is going up, it's head should turn up.
    this.curAngle = 0;
  }

  Bird.prototype = {
    constructor: Bird,

    init: function(option) {
      this.img = option.img;
      this.imgH = this.img.height;
      this.imgW = this.img.width / 3;
      this.ctx = option.ctx;
      this.speed = option.speed || 100;
    },

    render: function(delta) {
      // store the canvas context's state
      this.ctx.save();

      if (this.speed > this.maxSpeed) {
        this.speed = this.maxSpeed;
      } else if (this.speed < -this.maxSpeed) {
        this.speed = -this.maxSpeed;
      }
      this.curAngle = this.speed / this.maxSpeed * this.maxAngle;

      this.ctx.translate(this.x, this.y);
      this.ctx.rotate(this.curAngle / 180 * Math.PI);
      this.ctx.drawImage(this.img, this.index++ * this.imgW, 0, this.imgW,
        this.imgH, -
        1 / 2 * this.imgW, -
        1 / 2 * this.imgH, this.imgW,
        this.imgH);

      this.index %= 3;

      // Calculate the bird's position
      this.y += this.speed * delta + 1 / 2 * this.a * delta * delta;

      this.speed += this.a * delta;
      this.ctx.restore();
    },

    up: function() {
      this.speed = -0.2;
    }
  }

  // Export the Bird object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `Bird` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Bird;
    }
    exports.Bird = Bird;
  } else {
    this['Bird'] = Bird;
  }

}).call(this);
