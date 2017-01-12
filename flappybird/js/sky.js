(function() {
  function Sky() {
    this.x = 0;
  }

  Sky.prototype = {
    constructor: Sky,
    init: function(option) {
      this.img = option.img;
      this.imgW = this.img.width;
      this.imgH = this.img.height;

      this.ctx = option.ctx;

      this.speed = option.speed || 0.1;
    },
    render: function(delta) {
      this.ctx.save();

      this.ctx.translate(-this.x, 0);
      for (var i = 0; i < 2; i++) {
        this.ctx.drawImage(this.img, this.imgW * i, 0);
      }

      this.x += this.speed * delta;

      if (this.x >= this.imgW) {
        this.x = 0;
      }

      this.ctx.restore();
    },
  };

  module.exports = Sky;
}).call(this);
