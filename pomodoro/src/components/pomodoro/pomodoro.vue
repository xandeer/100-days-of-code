<template lang="pug">
#pomodoro
  .settings.clearfix
    .break.left
      .break-label break length
      span.reduce -
      span.value 5
      span.increase +
    .session.left
      .session-label session length
      span.reduce -
      span.value 25
      span.increase +
  .clock
    | 25:00
    .fill
</template>

<script>
</script>

<style lang="scss" rel="stylesheet/scss">
@import "pomodoro.scss";
</style>
