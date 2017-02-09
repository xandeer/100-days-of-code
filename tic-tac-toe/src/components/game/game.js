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

function overProbability(arr, pos) {
  const checkArr = OVERARR[pos];

  return checkArr.filter(pair => arr[pos] === arr[pair[0]] &&
    arr[pos] === arr[pair[1]]).length;
}

function isOver(arr, pos) {
  return overProbability(arr, pos) > 0;
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
      this.computerMove();
    },
    move(position) {
      if (this.status[position] === -1) {
        this.status[position] = this.turn;

        if (isOver(this.status, position)) {
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
    playerMove(pos) {
      if (!this.isComputerTurn() && !this.gameOver) {
        this.move(pos);
        this.computerMove();
      }
    },
    restart() {
      this.randomTurn();
      this.initStatus();
      this.gameOver = false;
      this.computerMove();
    },
    isComputerTurn() {
      return this.turn === 1 && this.playerCount === 1;
    },
    computerMove() {
      if (this.isComputerTurn() && !this.gameOver) {
        setTimeout(() => {
          // need to replace with a clever algorithm
          // this.move(this.status.indexOf(-1));
          this.move(this.moveToWhere());
        }, 800);
      }
    },
    isFirstMove() {
      return this.status.every(val => val === -1);
    },
    isFirstCorner() {
      return this.status.filter(item => item === -1).length === 8 && (this.status[
        0] === 0 || this.status[2] === 0 || this.status[6] === 0 || this.status[
        8] === 0);
    },
    isSecondToCenter() {
      return this.status.filter(item => item === -1).length === 7 && this.status[
        4] === -1;
    },
    moveToWhere() {
      const CORNERS = [0, 2, 6, 8];
      const status = this.status.slice(0);
      const computerHold = status.map((item) => {
        if (item === 1) {
          return -1;
        }
        return item;
      });
      const overNum = [0];

      let where = -1;
      let win = -1;
      let max = 0;
      if (this.isFirstMove()) {
        /* eslint-disable no-mixed-operators */
        where = CORNERS[Math.floor(Math.random() * 4)];
      } else if (this.isFirstCorner() || this.isSecondToCenter()) {
        where = 4;
      } else {
        for (let i = 0; i < 9; i += 1) {
          if (status[i] === -1) {
            status[i] = 1;
            // win
            if (isOver(status, i)) {
              win = i;
              break;
            }
            status[i] = 0;
            // block
            if (isOver(status, i)) {
              where = i;
            }
            status[i] = -1;

            overNum[i] = overProbability(computerHold, i);
            if (overNum[i] >= overNum[max]) {
              if (overNum[i] === overNum[max]) {
                max = Math.random() > 0.5 ? i : max;
              } else {
                max = i;
              }
            }
          }
        }
        if (win !== -1) {
          where = win;
        }
        if (where === -1) {
          where = status[max] !== -1 ? status.indexOf(-1) : max;
        }
      }
      return where;
    },
  },
};
