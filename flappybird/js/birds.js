(function() {
  function Bird() {
    this.MAX_SPEED = 0.5;
    this.MAX_ANGLE = 30;

    this.index = 0;
    // acceleration
    this.a = 0.0005;
    // When the bird is falling, it's head should head over heels,
    // and when it is going up, it's head should turn up.
    this.curAngle = 0;

    // To store subscriber's action
    this.listeners = [];
  }

  Bird.prototype = {
    constructor: Bird,

    init: function(option) {
      this.img = option.img;
      this.imgH = this.img.height;
      this.imgW = this.img.width / 3;
      this.landH = option.landH;

      this.ctx = option.ctx;

      this.speed = option.speed || 100;
      this.raiseSpeed = option.raiseSpeed;

      // the bird's position
      this.x = 100;
      this.y = 100;
    },

    render: function(delta) {
      this.ctx.save();

      if (this.speed > this.MAX_SPEED) {
        this.speed = this.MAX_SPEED;
      } else if (this.speed < -this.MAX_SPEED) {
        this.speed = -this.MAX_SPEED;
      }
      this.curAngle = this.speed / this.MAX_SPEED * this.MAX_ANGLE;

      this.ctx.translate(this.x, this.y);
      this.ctx.rotate(this.curAngle / 180 * Math.PI);

      this.ctx.drawImage(this.img,
        // change the bird image position every 5 render times
        parseInt((this.index++) / 5) * this.imgW, 0,
        this.imgW, this.imgH, -1 / 2 * this.imgW, -1 / 2 * this.imgH,
        this.imgW, this.imgH);

      if (this.isDied()) {
        this.trigger();
      }

      this.index %= 3 * 5;

      // Calculate the bird's position
      this.y += this.speed * delta + 1 / 2 * this.a * delta * delta;

      this.speed += this.a * delta;
      this.ctx.restore();
    },

    isDied: function() {
      if (this.isOverSky() || this.isFallToGround() ||
        this.isCrashedPipe()) {
        return true;
      }
      return false;
    },

    isOverSky: function() {
      return this.y <= this.imgH * 1 / 3;
    },

    isFallToGround: function() {
      return this.y >= this.landH - this.imgH * 1 / 3;
    },

    isCrashedPipe: function() {
      var y = this.y;
      y += this.speed > 0 ? this.imgW / 5 : -this.imgW / 5;
      if (this.ctx.isPointInPath(this.x + this.imgW / 5, y)) {
        return true;
      }
    },

    addListener: function(fn) {
      this.listeners.push(fn);
    },

    trigger: function() {
      this.listeners.forEach(function(fn) {
        fn && fn();
      });
    },

    raise: function() {
      this.speed = -this.raiseSpeed;
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
