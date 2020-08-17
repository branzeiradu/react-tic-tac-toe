class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          squareClicked: {
            col: null,
            row: null,
            index: null
          }
        }
      ],
      stepNr: 0,
      xIsNext: true,

    };
    console.log("(Game) Initial state: ");
    console.log(this.state);
  }

  jumpTo(step) {
    this.setState({
      stepNr: step,
      xIsNext: (step % 2) === 0
    });
  }

  getPlayer() {
    return (this.state.xIsNext ? "X" : "O");
  }



  handleSquareClick(i) {

    const squareCoord = { col: Math.floor(i / 3), row: i % 3, index: i };
    const history = this.state.history.slice(0, this.state.stepNr + 1);
    const current = history[history.length - 1];


    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
          squareClicked: squareCoord

        }
      ]),
      stepNr: history.length,
      xIsNext: !this.state.xIsNext,
    });

  }


  render() {
    const history = this.state.history;
    const current = history[this.state.stepNr];
    const winner = calculateWinner(current.squares);
    const selectedMove = this.state.stepNr;
    let boardClickHandler = (i) => this.handleSquareClick(i) ;

    if ((selectedMove != history.length - 1)) {
      boardClickHandler = null;//dont permit change of game after its finished
    }

    const moves = history.map((step, move) => {
      const currentSquare = step.squareClicked
      const goToStart = "Go to game start";
      const goToMove = "Move #" + move + " at " + "(" + (currentSquare.col + 1) + "," + (currentSquare.row + 1) + ")";

      const description = move ? goToMove : goToStart;
      const isSelected = (move == selectedMove) ? "game-state-item game-state" : "game-state-item";


      return (
        <li key={move} className={isSelected}>
          <button selected="{isSelected}" onClick={() => this.jumpTo(move)}>{description}</button>
        </li>
      );
    });


    let status = null, winning_line = null;
    if (winner) {
      status = 'Winner: ' + winner.player;
      winning_line = winner.line;
    } else {
      if (history.length - 1 === current.squares.length) {
        boardClickHandler = null;
        status = "Draw!"
      } else {
        status = 'Next player: ' + this.getPlayer();
      }
    }




    return (
      <div className="game">
        <Board

          winning_squares={winning_line}
          squares={current.squares}
          clickHandler={boardClickHandler}

        />
        <div className="game-info">
          <div className="game-player">{status}</div>
          <ul className="game-move-list">{moves}</ul>
        </div>
      </div>
    );
  }

}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  var w = -1;
  for (let i = 0; i < lines.length; i++) {
    w = i;
    const [a, b, c] = lines[i];
    
    const found = squares[a]
      && squares[a] === squares[b]
      && squares[a] === squares[c];

    if (found) {
      return {
        player: squares[a],
        line: lines[i].slice()
      };
    }

  }



  return null;
}