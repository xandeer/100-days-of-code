const OVERARR = [
  [
    [1, 2],
    [3, 6],
    [4, 8],
  ],
  [
    [0, 2],
    [4, 7],
  ],
  [
    [0, 1],
    [4, 6],
    [5, 8],
  ],
  [
    [0, 6],
    [4, 5],
  ],
  [
    [0, 8],
    [1, 7],
    [2, 6],
    [3, 5],
  ],
  [
    [2, 8],
    [3, 4],
  ],
  [
    [0, 3],
    [2, 4],
    [7, 8],
  ],
  [
    [1, 4],
    [6, 8],
  ],
  [
    [0, 4],
    [2, 5],
    [6, 7],
  ],
];

function isOver(arr, current) {
  const checkArr = OVERARR[current];

  return checkArr.some(pair => arr[current] === arr[pair[0]] &&
    arr[current] === arr[pair[1]]);
}

export default {
  name: 'game',
  data() {
    return {
      show: 0,
      playerCount: 1,
      player1: 'x',
      player2: 'o',
      turn: 1,
      score0: 0,
      score1: 0,
      draw: 0,
      status: [],
      gameOver: false,
      overMsg: '',
    };
  },
  methods: {
    initStatus() {
      for (let i = 0; i < 9; i += 1) {
        this.status[i] = -1;
      }
    },
    reset() {
      this.initStatus();
      this.show = 0;
      this.turn = 0;
      this.score0 = 0;
      this.score1 = 0;
      this.draw = 0;
    },
    setPlayerCount(playerCount) {
      this.show = 1;
      this.playerCount = playerCount;
    },
    randomTurn() {
      this.turn = Math.random() > 0.5 ? 0 : 1;
    },
    setPlayer(tac) {
      this.player1 = tac;
      this.player2 = tac === 'x' ? 'o' : 'x';
      this.show = 2;
      this.randomTurn();
      this.initStatus();
      if (this.playerCount === 1) {
        this.computerMove();
      }
    },
    move(current) {
      if (this.status[current] === -1) {
        this.status[current] = this.turn;

        if (isOver(this.status, current)) {
          if (this.playerCount === 2) {
            this.overMsg = `Player${this.turn} wins!`;
          } else if (this.turn === 0) {
            this.overMsg = 'You win! :)';
          } else {
            this.overMsg = 'Uh oh, you lost!';
          }
          this[`score${this.turn}`] += 1;
          this.gameOver = true;
        } else if (this.status.every(val => val !== -1)) {
          this.overMsg = 'It was a draw...';
          this.draw += 1;
          this.gameOver = true;
        }
        this.turn = this.turn === 0 ? 1 : 0;
      }
    },
    restart() {
      this.randomTurn();
      this.initStatus();
      this.computerMove();
      this.gameOver = false;
    },
    computerMove() {
      setInterval(() => {
        if (this.turn === 1 && this.playerCount === 1 && !this.gameOver) {
          // need to replace with a clever algorithm
          this.move(this.status.indexOf(-1));
        }
      }, 1000);
    },
  },
};
