<template>
  <div id="app">
    <pomodoro/>
  </div>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  margin-top: 100px;
}
</style>
