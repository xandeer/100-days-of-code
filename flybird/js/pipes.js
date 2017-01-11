(function() {
  function PipePair(option) {
    this.ctx = option.ctx;
    this.imgTop = option.imgTop;
    this.imgBottom = option.imgBottom;
    this.width = this.imgTop.width;
    this.canvasH = option.canvasH;
    this.MIN_HEIGHT = 50;
    this.MAX_HEIGHT = 350;
    this.x = option.x || 0;
    this.gapY = 150;
    this.topY = -300;
    this.bottomY = this.gapY + this.MAX_HEIGHT + this.topY;
  }

  PipePair.prototype = {
    constructor: PipePair,
    render: function() {
      this.ctx.save();

      this.ctx.drawImage(this.imgTop, this.x, this.topY);
      this.ctx.drawImage(this.imgBottom, this.x, this.bottomY);

      this.ctx.restore();
    },
    setRandomY: function() {
      var showHeight = Math.floor(Math.random() * (this.MAX_HEIGHT - this
        .MIN_HEIGHT) + this.MIN_HEIGHT);
      this.topY = -this.imgTop.height + showHeight;
      this.bottomY = this.topY + this.imgTop.height + this.gapY;
    }
  };

  function Pipes() {
    this.lists = [];
    this.length = 6;
    this.shift = 0;
  }

  Pipes.prototype = {
    constructor: Pipes,
    init: function(option) {
      this.speed = option.speed || 0.1;
      this.canvasW = option.canvasW;
      this.gap = this.canvasW / (this.length - 1) - option.imgTop.width;

      for (var i = 0; i < this.length; i++) {
        var sp = new PipePair({
          ctx: option.ctx,
          imgTop: option.imgTop,
          imgBottom: option.imgBottom,
          canvasH: option.canvasH,
          x: (this.gap + option.imgTop.width) * (i + 3)
        });
        sp.setRandomY();
        this.lists.push(sp);
      }

    },
    render: function(delta) {
      var sp;

      for (var i = 0; i < this.length; i++) {
        sp = this.lists[i];
        if (sp.x <= -sp.width) {
          sp.x = this.canvasW + this.gap;
          sp.setRandomY();
        } else {
          sp.x -= this.speed * delta;
        }
        sp.render();
      }
    }
  };

  module.exports = Pipes;
}).call(this);
