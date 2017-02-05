<template lang='pug'>
#calc
  .display-area
    .answer 0
    .expression 0
  table.disable-select
    tbody
      tr
        td.gray AC
        td.gray CE
        td.gray %
        td.operator ÷
      tr
        td 7
        td 8
        td 9
        td.operator ×
      tr
        td 4
        td 5
        td 6
        td.operator -
      tr
        td 1
        td 2
        td 3
        td.operator +
      tr
        td(colspan='2') 0
        td .
        td.operator =
</template>

<script>

export default {
  name: 'calculator',
};
</script>

<style lang='scss' rel='stylesheet/scss'>
  @import 'calculator.scss';
</style>
