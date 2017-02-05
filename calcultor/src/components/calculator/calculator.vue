<template lang='pug'>
#calc
  .display-area
    .current {{ current }}
    .expression {{ expr }}
  table.disable-select
    tbody
      tr
        td.danger(@click='allClear') AC
        td.danger(@click='clearEntry') CE
        td.operator(@click='compute("%")') %
        td.operator(@click='compute("/")') ÷
      tr
        td(@click='compute(7)') 7
        td(@click='compute(8)') 8
        td(@click='compute(9)') 9
        td.operator(@click='compute("*")') ×
      tr
        td(@click='compute(4)') 4
        td(@click='compute(5)') 5
        td(@click='compute(6)') 6
        td.operator(@click='compute("-")') -
      tr
        td(@click='compute(1)') 1
        td(@click='compute(2)') 2
        td(@click='compute(3)') 3
        td.operator(@click='compute("+")') +
      tr
        td(colspan='2' @click='compute(0)') 0
        td(@click='compute(".")') .
        td.operator(@click='compute("=")') =
</template>

<script>

function isOperator(n) {
  let ret = false;
  switch (n) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
    case '=':
      ret = true;
      break;
    default:
  }

  return ret;
}

function isDot(n) {
  return n === '.';
}

export default {
  name: 'calculator',
  data() {
    return {
      current: 0,
      expr: 0,
      answer: 0,
      last: 0,
    };
  },
  methods: {
    allClear() {
      this.current = 0;
      this.expr = 0;
      this.answer = 0;
      this.last = 0;
      this.num = 0;
    },
    clearEntry() {
      this.current = 0;
    },
    compute(n) {
      if ((isOperator(this.last) && isOperator(n)) ||
        (isDot(this.last) && isDot(n))) {
        return;
      }

      if (isOperator(n)) {
        this.num = this.current;
        this.current = n;
      } else {
        this.current = n;
      }

      this.expr += n;


      this.last = n;
    },
  },
};
</script>

<style lang='scss' rel='stylesheet/scss'>
  @import 'calculator.scss';
</style>
