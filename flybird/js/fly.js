(function() {
  var imgSrcs = require('./config.js').imgSrcs;
  var Bird = require('./birds.js');
  var Sky = require('./sky.js');

  /**
   * [Fly constructor]
   * @param {[String]} canvas [a canvas ID]
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
  }

  /**
   * [start playing game]
   * @return {[undefined]} [none]
   */
  Fly.prototype.start = function() {
    var that = this;

    // When the images are loaded, the game starts.
    this.preLoadImage(imgSrcs, function() {
      // init the bird
      that.bird.init({
        ctx: that.ctx,
        img: that.imgs['birds']
      });
      that.sky.init({
        ctx: that.ctx,
        img: that.imgs['sky']
      });
      // interval time
      var delta = 0;
      var lastFrameTime = new Date() - 0;

      var render = function() {
        var curFrameTime = new Date() - 0;
        delta = curFrameTime - lastFrameTime;
        lastFrameTime = curFrameTime;

        // Clear the canvas
        that.ctx.clearRect(0, 0, that.cv.width, that.cv.height);

        that.sky.render(delta);
        that.bird.render(delta);

        // Call requestAnimationFrame recurrently to render the game.
        window.requestAnimationFrame(render);
      };
      window.requestAnimationFrame(render);
    });

    // When you click the canvas, the bird will go up.
    this.cv.addEventListener('click', function() {
      that.bird.up();
    });
  };

  /**
   * To load the images.
   * @param  {[Array]}   imgSrcs [images' name and src]
   * @param  {Function} fn    [callback]
   * @return {[undefined]}         [no return]
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

}).call(this);
