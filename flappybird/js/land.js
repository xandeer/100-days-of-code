(function() {
  function Land() {
    this.x = 0;
  }

  Land.prototype = {
    constructor: Land,
    init: function(option) {
      this.img = option.img;
      this.imgW = this.img.width;
      this.imgH = this.img.height;
      this.canvasH = option.canvasH;

      this.ctx = option.ctx;

      this.speed = option.speed || 0.1;
    },
    render: function(delta) {
      this.ctx.save();

      this.ctx.translate(-this.x, 0);
      for (var i = 0; i < 4; i++) {
        this.ctx.drawImage(this.img, this.imgW * i, this.canvasH - this.imgH);
      }

      this.x += this.speed * delta;

      if (this.x >= this.imgW) {
        this.x = 0;
      }

      this.ctx.restore();
    },
  };

  module.exports = Land;
}).call(this);
