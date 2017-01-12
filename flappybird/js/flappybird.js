(function() {
  var config = require('./config.js');
  var Bird = require('./birds.js');
  var Sky = require('./sky.js');
  var Land = require('./land.js');
  var Pipes = require('./pipes.js');

  /**
   * FlappyBird constructor
   */
  function FlappyBird() {
    this.cv = document.getElementById('flappy-canvas');
    this.cv.width = 800;
    this.cv.height = 600;

    this.btn = document.getElementById('flappy-play');
    this.status = document.getElementById('flappy-status');
    this.msg = document.getElementById('flappy-msg');

    this.ctx = this.cv.getContext('2d');
    this.imgs = {};

    this.isPlaying = false;
    this.isOver = false;
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

  FlappyBird.prototype = {
    constructor: FlappyBird,

    init: function() {
      var that = this;
      this.score = 0;

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
    },

    renderScore: function(delta) {
      this.ctx.save();
      this.ctx.font = '30px serif';
      this.ctx.fillStyle = 'white';
      this.score += delta / 1000;
      this.ctx.translate(this.cv.width - 200, 50);
      this.ctx.fillText('Score: ' + this.score.toFixed(2) + 's', 0, 0);

      this.ctx.restore();
    },

    start: function() {
      this.status.classList.remove('flappy_show');
      this.isPlaying = true;
    },

    pause: function() {
      this.isPlaying = false;
      this.msg.innerHTML = 'Pausing';
      this.status.classList.add('flappy_show');
      this.btn.innerHTML = 'Resume';
    },

    restart: function() {
      this.init();
      this.isOver = false;
      this.msg.classList.remove('flappy-msg_over');
      this.start();
    },

    ready: function() {
      var that = this;

      // When the images are loaded, the game starts.
      this.preLoadImages(config.imgSrcs, function() {
        that.status.classList.add('flappy_show');

        // init
        that.init();
        that.registerEvents();

        that.bird.addListener(function() {
          that.gameOver();
        });

        // interval time
        var delta = 0;
        var lastFrameTime = new Date() - 0;

        var render = function() {
          var curFrameTime = new Date() - 0;
          delta = curFrameTime - lastFrameTime;
          lastFrameTime = curFrameTime;

          if (that.isPlaying) {
            // Clear the canvas
            that.ctx.clearRect(0, 0, that.cv.width, that.cv.height);
            that.ctx.beginPath();

            for (var name in that.roles) {
              that.roles[name].render(delta);
            }

            that.renderScore(delta);
          }
          // Call requestAnimationFrame recurrently to render the game.
          window.requestAnimationFrame(render);
        };
        window.requestAnimationFrame(render);
      });
    },

    registerEvents: function() {
      var that = this;
      // When you click the canvas, the bird will go up.
      this.cv.addEventListener('click', function() {
        that.bird.raise();
      });

      this.btn.addEventListener('click', function() {
        if (that.status.classList.contains('flappy_show')) {
          if (that.msg.classList.contains('flappy-msg_over')) {
            that.restart();
          } else {
            that.start();
          }
        }
      });
      document.addEventListener('keydown', function(event) {
        switch (event.keyCode) {
          // Space
          case 32:
            if (that.isPlaying) {
              that.pause();
            } else if (!that.isOver) {
              that.start();
            } else {
              that.restart();
            }
            break;
        }
      });
    },

    gameOver: function() {
      this.isPlaying = false;
      this.isOver = true;
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
    preLoadImages: function(imgSrcs, fn) {
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

  var createFlappyBird = function() {
    var flappyBird;
    return function() {
      return flappyBird || (flappyBird = new FlappyBird());
    }
  }();

  // Export the FlappyBird object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `FlappyBird` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = createFlappyBird;
    }
    exports.FlappyBird = createFlappyBird;
  } else {
    this['FlappyBird'] = createFlappyBird;
  }

}).call(this);
