function timeFormat(secs) {
  let h = '';
  let m = '';
  let s = '';
  if (secs >= 3600) {
    h = `${parseInt(secs / 3600, 10)}:`;
  }

  m = parseInt((secs % 3600) / 60, 10);
  m = m < 10 ? `0${m}:` : `${m}:`;

  s = secs % 60;
  s = s < 10 ? `0${s}` : s;

  return h + m + s;
}

export default {
  name: 'pomodoro',
  data() {
    return {
      rest: 5,
      session: 25,
      secs: 1500,
      time: '25:00',
      // status: ['session', 'rest']
      status: 'session',
      isPaused: true,
      timer: null,
      fillStyle: {
        height: 0,
      },
    };
  },
  methods: {
    update(name) {
      if (this.status === name) {
        this.isPaused = true;
        this.secs = this[this.status] * 60;
        this.time = timeFormat(this.secs);
        this.timer = this.timer && clearInterval(this.timer);
      }
    },
    reduce(name) {
      if (this[name] > 1) {
        this[name] -= 1;
      }
      this.update(name);
    },
    increase(name) {
      this[name] += 1;
      this.update(name);
    },
    toggle() {
      this.isPaused = !this.isPaused;
      this.timer = this.timer && clearInterval(this.timer);

      this.timer = setInterval(() => {
        const secsTotal = this[this.status] * 60;
        if (!this.isPaused) {
          this.secs -= 1;
          this.time = timeFormat(this.secs);
          this.fillStyle.height =
            `${((secsTotal - this.secs) / secsTotal) * 100}%`;

          if (this.secs === 0) {
            this.status = this.status === 'session' ? 'rest' : 'session';
            this.secs = this[this.status] * 60;
            this.fillStyle.height = 0;
          }
        }
      }, 1000);
    },
  },
};
