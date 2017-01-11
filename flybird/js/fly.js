(function() {
  var imgSrcs = require('./config.js').imgSrcs;
  var Bird = require('./birds.js');
  var Sky = require('./sky.js');
  var Land = require('./land.js');
  var Pipes = require('./pipes.js');

  /**
   * Fly constructor
   * @param {String} canvas a canvas ID
   */
  function Fly(canvas) {
    this.cv = document.getElementById(canvas);
    this.cv.width = 800;
    this.cv.height = 600;
    this.ctx = this.cv.getContext('2d');
    this.imgs = {};
    this.delta = 0;
    this.bird = new Bird();
    this.sky = new Sky();
    this.land = new Land();
    this.pipes = new Pipes();
    this.roles = {
      sky: this.sky,
      pipes: this.pipes,
      land: this.land,
      birds: this.bird
    };
    this.handle = 0;
    this.timeCount = 0;
  }

  Fly.prototype.init = function() {
    this.bird.init({
      ctx: this.ctx,
      img: this.imgs['birds'],
      speed: 0.15
    });
    this.sky.init({
      ctx: this.ctx,
      img: this.imgs['sky'],
      speed: 0.15
    });
    this.land.init({
      ctx: this.ctx,
      img: this.imgs['land'],
      canvasH: this.cv.height,
      speed: 0.15
    });
    this.pipes.init({
      ctx: this.ctx,
      canvasH: this.cv.height,
      canvasW: this.cv.width,
      imgTop: this.imgs['pipe2'],
      imgBottom: this.imgs['pipe1'],
      speed: 0.15
    });
  };

  Fly.prototype.renderTimeCount = function() {
    this.ctx.save();
    this.ctx.font = '30px serif';
    this.ctx.fillStyle = 'white';
    this.ctx.translate(this.cv.width - 100, 50);
    this.ctx.fillText(this.timeCount.toFixed(2) + 's', 0, 0);

    this.ctx.restore();
  };
  /**
   * start playing game
   * @return {undefined} none
   */
  Fly.prototype.start = function() {
    var that = this;

    // When the images are loaded, the game starts.
    this.preLoadImage(imgSrcs, function() {
      // init
      that.init();

      // interval time
      var delta = 0;
      var lastFrameTime = new Date() - 0;

      var render = function() {
        var curFrameTime = new Date() - 0;
        delta = curFrameTime - lastFrameTime;
        lastFrameTime = curFrameTime;
        that.timeCount += delta / 1000;

        // Clear the canvas
        that.ctx.clearRect(0, 0, that.cv.width, that.cv.height);
        that.ctx.beginPath();

        for (var name in that.roles) {
          that.roles[name].render(delta);
        }

        that.renderTimeCount();

        // Call requestAnimationFrame recurrently to render the game.
        that.handle = window.requestAnimationFrame(render);

        // game over
        if ((that.bird.y >= that.cv.height - that.land.imgH - that.bird
            .imgH * 1 / 6) ||
          (that.bird.y - that.bird.imgH * 1 / 6 <= 0) ||
          (that.ctx.isPointInPath(that.bird.x + that.bird.imgW / 4,
            that.bird.y))) {
          window.cancelAnimationFrame(that.handle);
        }
      };
      this.handle = window.requestAnimationFrame(render);
    });

    // When you click the canvas, the bird will go up.
    this.cv.addEventListener('click', function() {
      that.bird.up();
    });
  };

  /**
   * To load the images.
   * @param  {Array}   imgSrcs images' name and src
   * @param  {Function} fn    callback
   * @return {undefined}         no return
   */
  Fly.prototype.preLoadImage = function(imgSrcs, fn) {
    var len = imgSrcs.length;
    var count = 0;
    var img;

    for (var i = 0; i < len; i++) {
      img = new Image();
      img.src = imgSrcs[i].src;
      this.imgs[imgSrcs[i].name] = img;

      img.onload = function() {
        count++;

        // when all images had been loaded, call fn
        if (count == len) {
          console.log('Loading images success.');
          fn && fn();
        }
      }
    }
  };

  // Export the Fly object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `Fly` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Fly;
    }
    exports.Fly = Fly;
  } else {
    this['Fly'] = Fly;
  }

}).call(this);;
