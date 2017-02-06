<template lang='pug'>
#calc
  .display-area
    .current {{ current }}
    .expression {{ expr }}
  table.disable-select
    tbody
      tr
        td.danger(@click='clearAll') AC
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

function updateAnswer(answer, op, num) {
  let ret = 0;
  switch (op) {
    case '+':
      ret = answer + num;
      break;
    case '-':
      ret = answer - num;
      break;
    case '*':
      ret = answer * num;
      break;
    case '/':
      ret = answer / num;
      break;
    case '%':
      ret = answer % num;
      break;
    default:
  }
  return ret;
}

// round function if answer includes a decimal
function round(value) {
  let val = value.toString().split('');
  if (val.indexOf('.') !== -1) {
    let valTest = val.slice(val.indexOf('.') + 1, val.length);
    val = val.slice(0, val.indexOf('.') + 1);
    let i = 0;
    while (valTest[i] < 1) {
      i += 1;
    }
    valTest = valTest.join('').slice(0, i + 2);
    if (valTest[valTest.length - 1] === '0') {
      valTest = valTest.slice(0, -1);
    }
    return val.join('') + valTest;
  }
  return val.join('');
}

export default {
  name: 'calculator',
  data() {
    return {
      current: '0',
      expr: '0',
      answer: 0,
      last: '+',
      op: '+',
    };
  },
  methods: {
    clearAll() {
      this.current = '0';
      this.expr = '0';
      this.answer = 0;
      this.last = '+';
      this.op = '+';
    },
    clearEntry() {
      if (this.last === '=') {
        this.clearAll();
      }
      if (this.current !== '0' && !isOperator(this.current)) {
        this.expr = this.expr.slice(0, -this.current.length) || '0';
        this.current = '0';
        this.last = '+';
      }
    },
    compute(entry) {
      if (this.last === '=') {
        this.clearAll();
      }
      if ((isOperator(this.last) && isOperator(entry)) ||
        (this.current.indexOf('.') > -1 && isDot(entry))) {
        return;
      }

      if (isOperator(entry)) {
        const num = parseFloat(this.current);
        this.current = entry;
        this.expr += entry;

        this.answer = updateAnswer(this.answer, this.op, num);
        if (entry === '=') {
          this.current = round(this.answer);
          this.expr += this.current;
        }

        this.op = entry;
      } else {
        if (isOperator(this.last)) {
          if (isDot(entry)) {
            this.current = '0';
            this.expr += '0';
          } else {
            this.current = '';
          }
        }

        if (!(this.current === '0' && entry === 0)) {
          if (this.expr === '0') {
            if (isDot(entry)) {
              this.expr = '0';
            } else {
              this.expr = '';
            }
          }

          if (this.current === '0') {
            if (isDot(entry)) {
              this.current = '0';
            } else {
              this.current = '';
            }
          }
          this.current += entry;
          this.expr += entry;
        }
      }

      this.last = entry;
    },
  },
};
</script>

<style lang='scss' rel='stylesheet/scss'>
  @import 'calculator.scss';
</style>
