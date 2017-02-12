<template lang='pug'>
.simon
  .simon-item(:class='light0 ? "light" : ""')
    .circle.tl.bg_red(@click='play(0)', :class='playerTurn ? "enabled" : ""')
  .simon-item(:class='light1 ? "light" : ""')
    .circle.tr.bg_yellow(@click='play(1)', :class='playerTurn ? "enabled" : ""')
  .simon-item(:class='light2 ? "light" : ""')
    .circle.bl.bg_blue(@click='play(2)', :class='playerTurn ? "enabled" : ""')
  .simon-item(:class='light3 ? "light" : ""')
    .circle.br.bg_green(@click='play(3)', :class='playerTurn ? "enabled" : ""')
  .simon-item.simon-ctl
    .ctl-top Simon
    .ctl-middle
      .middle-item
        .count-val {{ status }}
        .ctl-label COUNT
      .middle-item
        .ctl-btn.bg_red(:class='sw === "on" ? "enabled" : ""', @click='startGame')
        .ctl-label START
      .middle-item
        .ctl-btn.bg_green(@click='toggleStrict', :class='strictState')
        .ctl-label STRICT
    .ctl-bottom
      .ctl-label OFF
      .switch(@click='toggleSwitch')
        .switch-inner(:class='sw')
      .ctl-label ON
</template>

<script>
import { Howl } from 'howler';

function getRandom() {
  return Math.floor(Math.random() * 4);
}
export default {
  name: 'simon',
  data() {
    return {
      count: 1,
      sw: 'off',
      start: false,
      strict: false,
      light0: false,
      light1: false,
      light2: false,
      light3: false,
      intervalId: null,
      interval: 1000,
      timeoutId: null,
      timeout: 3000,
      order: [],
      compareOrder: [],
      playerTurn: false,
      error: false,
      win: false,
      audios: [],
    };
  },
  computed: {
    strictState() {
      let state = this.sw === 'on' ? ' enabled' : '';
      state += this.strict ? ' active' : '';
      return state;
    },
    status() {
      if (this.win) {
        return 'win';
      } else if (this.error) {
        return '! !';
      } else if (!this.start) {
        return '- -';
      }
      return this.count;
    },
    whichLight() {
      let ret = -1;
      for (let i = 0; i < 4; i += 1) {
        if (this[`light${i}`]) {
          ret = i;
          break;
        }
      }
      return ret;
    },
  },
  watch: {
    whichLight(val) {
      this.audios.forEach((audio) => {
        audio.stop();
      });
      if (val !== -1) {
        this.audios[val].play();
      }
    },
  },
  methods: {
    init() {
      this.playerTurn = false;
      this.error = false;
      this.win = false;
      this.count = 1;
      this.order = [];
      this.compareOrder = [];
      this.interval = 1000;
      this.timeout = 3000;
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      for (let i = 0; i < 4; i += 1) {
        this[`light${i}`] = false;
      }
    },
    toggleSwitch() {
      this.sw = this.sw === 'off' ? 'on' : 'off';
      this.init();
      this.start = false;
      this.strict = false;
    },
    toggleStrict() {
      this.strict = this.sw === 'on' ? !this.strict : this.strict;
    },
    gameLoop() {
      let index = 0;
      let errorTimes = 2;

      this.intervalId = setInterval(() => {
        if (this.whichLight !== -1) {
          this[`light${this.whichLight}`] = false;
        } else if (!this.playerTurn && !this.error) {
          this[`light${this.order[index]}`] = true;
          index += 1;
        }

        if (index === 10) {
          this.interval = 500;
        }

        if (this.error && errorTimes > 0) {
          errorTimes -= 1;
        } else if (this.error) {
          errorTimes = 1;
          this.error = false;
        }

        if (this.win) {
          clearInterval(this.intervalId);
        }

        // player turn
        if (index >= this.count) {
          this.compareOrder = this.order.slice(0);
          this.playerTurn = true;
          index = 0;
          this.timeoutId = setTimeout(() => {
            this.fail();
          }, this.timeout);
        }
      }, this.interval);
    },
    startGame() {
      if (this.sw === 'off') {
        return;
      }

      // init game
      this.init();
      this.order.push(getRandom());
      this.start = true;
      this.count = 1;

      this.gameLoop();
    },
    fail() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.error = true;
      this.playerTurn = false;
      this.compareOrder = [];
      if (this.strict) {
        this.count = 1;
        this.order = [];
        this.order.push(getRandom());
      }
    },
    play(num) {
      if (!this.playerTurn) {
        return;
      }

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
          this.fail();
        }, this.timeout);
      }
      this[`light${num}`] = true;

      if (num !== this.compareOrder.shift()) {
        this.fail();
      }

      if (!this.error && this.compareOrder.length === 0) {
        if (this.order.length === 20) {
          this.win = true;
          return;
        }
        this.order.push(getRandom());
        this.count += 1;
        this.playerTurn = false;
        clearTimeout(this.timeoutId);
      }
    },
  },
  created() {
    for (let i = 1; i < 5; i += 1) {
      const url = `https://s3.amazonaws.com/freecodecamp/simonSound${i}.mp3`;
      this.audios.push(new Howl({
        src: url,
        html5: true,
      }));
    }
  },
  beforeDestroy() {
    this.timeoutId = this.timeoutId && clearTimeout(this.timeoutId);
    this.intervalId = this.intervalId && clearInterval(this.intervalId);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "simon.scss"
</style>
