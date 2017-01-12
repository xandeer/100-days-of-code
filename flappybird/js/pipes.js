(function() {
  function PipePair(option) {

  }

  PipePair.prototype = {
    constructor: PipePair,
    init: function(option) {
      this.ctx = option.ctx;
      this.imgTop = option.imgTop;
      this.imgBottom = option.imgBottom;
      this.width = this.imgTop.width;
      this.height = this.imgTop.height;
      this.canvasH = option.canvasH;
      this.MIN_HEIGHT = 50;
      this.MAX_HEIGHT = 250;
      this.x = option.x || 0;
      this.gapY = 150;
      this.topY = -300;
      this.bottomY = this.gapY + this.MAX_HEIGHT + this.topY;
    },
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
    },
    drawRect: function() {
      this.ctx.rect(this.x, this.topY, this.width, this.height);
      this.ctx.rect(this.x, this.bottomY, this.width, this.height);
    }
  };

  function Pipes() {
    this.lists = [];
    this.length = 6;
    for (var i = 0; i < this.length; i++) {
      var sp = new PipePair();
      this.lists.push(sp);
    }
  }

  Pipes.prototype = {
    constructor: Pipes,
    init: function(option) {
      var that = this;
      this.speed = option.speed || 0.1;
      this.canvasW = option.canvasW;
      this.gap = this.canvasW / (this.length - 1) - option.imgTop.width;

      this.lists.forEach(function(sp, index) {
        sp.init({
          ctx: option.ctx,
          imgTop: option.imgTop,
          imgBottom: option.imgBottom,
          canvasH: option.canvasH,
          x: (that.gap + option.imgTop.width) * (index + 2)
        });
        sp.setRandomY();
      });
    },
    render: function(delta) {
      var sp;

      for (var i = 0; i < this.length; i++) {
        sp = this.lists[i];
        sp.x -= this.speed * delta;
        if (sp.x <= -sp.width) {
          sp.x += this.canvasW + this.gap + sp.width;
          sp.setRandomY();
        }
        sp.drawRect();
        sp.render();
      }
    }
  };

  module.exports = Pipes;
}).call(this);
