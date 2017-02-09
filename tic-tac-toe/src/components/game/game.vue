<template lang="pug">
mixin lists
  ul
    each i in [0, 1, 2, 3, 4, 5, 6, 7, 8]
      li(class=(i < 6 ? 'border_bottom' : ''), class=((i + 1) % 3 ? 'border_right' : ''), class='board-item', @click='playerMove(' + i + ')') {{ status[#{i}] === -1 ? '' : status[#{i}] === 0 ? player1 : player2 }}
#game
  .container
    .turn
      .turn-item(v-show='show === 2 && turn === 0 && !gameOver') {{ playerCount === 1 ? 'Your turn!' : 'Go Player 1!' }}
      .turn-item(v-show='show === 2 && turn === 1 && !gameOver') {{ playerCount === 1 ? 'Computer\'s turn!' : 'Go Player 2!' }}
    .starter(v-show="show === 0")
      p How do you want to play?
      .starter-btn
        button(@click='setPlayerCount(1)') One Player
        button(@click='setPlayerCount(2)') Two Players
    .choice(v-show="show === 1")
      p
        span(v-show="playerCount === 2") Player 1:
        | Would you like
        span(v-show="playerCount === 1")  to be
        |  x or o?
      .choice-btn
        button(@click='setPlayer("x")') x
        button(@click='setPlayer("o")') o
      button.back(@click='show = 0') &lt;- Back
    .status(v-show="show === 2")
      .player1
        p.score {{ score0 }}
        p.name player1
      .player2
        p.score {{ score1 }}
        p.name {{ playerCount === 1 ? 'computer' : 'player2' }}
      .draw
        p.score {{ draw }}
        p.name draw
      .reset
        button(@click='reset()') Reset
    .board(v-show="show === 2")
      +lists
    .over(v-show="gameOver === true", @click='restart()') {{ overMsg }}
</template>

<script src='./game.js'>
</script>

<style lang="scss">
@import "game.scss";
</style>
