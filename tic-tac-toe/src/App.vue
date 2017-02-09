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
  font-size: 125px;
}

@media screen and (max-width : 1204px) {
  html {
    font-size: 125px;
  }
}

@media screen and (max-width : 768px) {
  html {
    font-size: 100px;
  }
}

@media screen and (max-width : 320px) {
  html {
    font-size: 75px;
  }
}

body {
  font-size: 0.15rem;
  margin: 0 auto;
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
  margin-top: 0.6rem;

  header {
    font: 0.56rem bold;
    margin-bottom: 0.4rem;
  }
}
</style>
