<template lang='pug'>
  .simon
    .simon-item(@mousedown='light0 = true', @mouseup='light0 = false', :class='light0 ? "light" : ""')
      .circle.tl.bg_red(@click='play(0)', :class='isPlayerTurn ? "enabled" : ""')
    .simon-item(:class='light1 ? "light" : ""')
      .circle.tr.bg_yellow(@click='play(1)', :class='isPlayerTurn ? "enabled" : ""')
    .simon-item(:class='light2 ? "light" : ""')
      .circle.bl.bg_blue(@click='play(2)', :class='isPlayerTurn ? "enabled" : ""')
    .simon-item(:class='light3 ? "light" : ""')
      .circle.br.bg_green(@click='play(3)', :class='isPlayerTurn ? "enabled" : ""')
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
      timer: null,
      order: [],
      compareOrder: [],
      isPlayerTurn: false,
      isError: false,
    };
  },
  computed: {
    strictState() {
      let state = this.sw === 'on' ? ' enabled' : '';
      state += this.strict ? ' active' : '';
      return state;
    },
    status() {
      if (this.isError) {
        return '! !';
      } else if (!this.start) {
        return '- -';
      }
      return this.count;
    },
  },
  methods: {
    init() {
      this.isPlayerTurn = false;
      this.isError = false;
      this.count = 1;
      this.order = [];
      this.compareOrder = [];
      if (this.timer) {
        clearInterval(this.timer);
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
    startGame() {
      if (this.sw === 'off') {
        return;
      }
      this.init();

      let index = 0;
      let errorTimes = 2;
      this.order.push(getRandom());

      this.start = true;
      this.count = 1;
      this.timer = setInterval(() => {
        const lightIndex = this.whichLight();
        if (lightIndex !== -1) {
          this[`light${lightIndex}`] = false;
        } else if (!this.isPlayerTurn && !this.isError) {
          this[`light${this.order[index]}`] = true;
          index += 1;
        }

        if (this.isError && errorTimes > 0) {
          errorTimes -= 1;
        } else if (this.isError) {
          errorTimes = 1;
          this.isError = false;
        }

        if (index >= this.count) {
          this.compareOrder = this.order.slice(0);
          this.isPlayerTurn = true;
          index = 0;
        }
      }, 500);
    },
    play(num) {
      if (this.isPlayerTurn) {
        if (num !== this.compareOrder.shift()) {
          this.isError = true;
          this.isPlayerTurn = false;
          this.compareOrder = [];
          if (this.strict) {
            this.count = 1;
            this.order = [];
            this.order.push(getRandom());
          }
        }

        if (!this.isError && this.compareOrder.length === 0) {
          this.order.push(getRandom());
          this.count += 1;
          this.isPlayerTurn = false;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "simon.scss"
</style>
