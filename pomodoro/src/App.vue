<template lang='pug'>
#app
  header Pomodoro Clock
  pomodoro
</template>

<script>
import pomodoro from './components/pomodoro/pomodoro';

export default {
  name: 'app',
  components: {
    pomodoro,
  },
};
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  margin-top: 60px;

  header {
    font-size: 56px;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 40px;
  }
}
</style>
