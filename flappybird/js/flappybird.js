(function() {
  var config = require('./config.js');
  var Bird = require('./birds.js');
  var Sky = require('./sky.js');
  var Land = require('./land.js');
  var Pipes = require('./pipes.js');

  /**
   * _FlappyBird constructor
   * @param {String} canvas a canvas ID
   */
  function _FlappyBird(canvas) {
    this.instance = null;
    this.cv = document.getElementById(canvas);
    this.btn = document.getElementById('flappy-play');
    this.status = document.getElementById('flappy-status');
    this.msg = document.getElementById('flappy-msg');
    this.cv.width = 800;
    this.cv.height = 600;
    this.ctx = this.cv.getContext('2d');
    this.imgs = {};
    this.isPlaying = false;
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
  }

  _FlappyBird.prototype = {
    constructor: _FlappyBird,

    init: function() {
      var that = this;
      this.timeCount = 0;

      this.sky.init({
        ctx: this.ctx,
        img: this.imgs['sky'],
        speed: config.bgSpeed
      });
      this.land.init({
        ctx: this.ctx,
        img: this.imgs['land'],
        canvasH: this.cv.height,
        speed: config.bgSpeed
      });
      this.pipes.init({
        ctx: this.ctx,
        canvasH: this.cv.height,
        canvasW: this.cv.width,
        imgTop: this.imgs['pipe2'],
        imgBottom: this.imgs['pipe1'],
        speed: config.bgSpeed
      });
      this.bird.init({
        ctx: this.ctx,
        img: this.imgs['birds'],
        landH: this.cv.height - this.land.imgH,
        speed: config.fallSpeed,
        raiseSpeed: config.raiseSpeed
      });

      this.bird.addListener(function() {
        that.gameOver();
      });
    },

    renderTimeCount: function() {
      this.ctx.save();
      this.ctx.font = '30px serif';
      this.ctx.fillStyle = 'white';
      this.ctx.translate(this.cv.width - 200, 50);
      this.ctx.fillText('Score: ' + this.timeCount.toFixed(2) + 's', 0, 0);

      this.ctx.restore();
    },

    getInstance: function(canvas) {
      if (this.instance == null) {
        this.instance = new _FlappyBird(canvas);
        this.instance.registerEvent();
      }
      return this.instance;
    },

    welcome: function() {
      this.isPlaying = false;
    },

    start: function() {
      var that = this;
      this.isPlaying = true;

      // When the images are loaded, the game starts.
      this.preLoadImage(config.imgSrcs, function() {
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

          if (that.isPlaying) {
            // Call requestAnimationFrame recurrently to render the game.
            window.requestAnimationFrame(render);
          }
        };
        window.requestAnimationFrame(render);
      });
    },

    registerEvent: function() {
      var that = this;
      // When you click the canvas, the bird will go up.
      this.cv.addEventListener('click', function() {
        that.bird.up();
      });

      this.btn.addEventListener('click', function() {
        console.log(that);
        if (that.status.classList.contains('flappy_show')) {
          that.start();
          that.status.classList.remove('flappy_show');
        }
      });
    },

    gameOver: function() {
      this.isPlaying = false;
      this.btn.innerHTML = 'Restart';
      this.msg.innerHTML = 'Game Over';
      this.msg.classList.add('flappy-msg_over');
      this.status.classList.add('flappy_show');
    },

    /**
     * To load the images.
     * @param  {Array}   imgSrcs images' name and src
     * @param  {Function} fn    callback
     * @return {undefined}         no return
     */
    preLoadImage: function(imgSrcs, fn) {
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
    }
  };

  function FlappyBird(canvas) {
    return _FlappyBird.prototype.getInstance(canvas);
  }

  // Export the FlappyBird object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `FlappyBird` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = FlappyBird;
    }
    exports.FlappyBird = FlappyBird;
  } else {
    this['FlappyBird'] = FlappyBird;
  }

}).call(this);
