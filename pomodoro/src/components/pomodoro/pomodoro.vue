<template lang="pug">
mixin setting(name, alias)
  -let reduce = 'reduce("' + (alias || name) + '")';
  -let increase = 'increase("' + (alias || name) + '")';
  .left(class=name)
    div(class=name + '-label')= name + ' length'
    span.reduce(@click=reduce) -
    span.value= '{{' + (alias || name) + '}}'
    span.increase(@click=increase) +

#pomodoro
  .settings.clearfix
    +setting('break', 'rest')
    +setting('session')
  .clock(@click='toggle()')
    | {{ time }}
    .fill(:class='status', :style='fillStyle')
</template>

<script src='./pomodoro.js'></script>

<style lang="scss" rel="stylesheet/scss">
@import "pomodoro.scss";
</style>
