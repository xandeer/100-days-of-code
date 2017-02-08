<template lang="pug">
#app
  header Tic Tac Toe
  game
</template>

<script>
import game from './components/game/game.vue';

export default {
  name: 'app',
  components: {
    game,
  },
};
</script>

<style lang='scss'>

html {
  font-size: 100px;
}

body {
  font-size: .15rem;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  header {
    font: 0.56rem bold;
    margin-bottom: 40px;
  }
}
</style>
