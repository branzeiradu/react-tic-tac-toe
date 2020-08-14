class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNr: 0,
      xIsNext: true,

    };

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
          squares: squares
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

    const moves = history.map((step, move) => {
      const description = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{description}</button>
        </li>
      );
    });


    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + this.getPlayer();
    }




    return (
      <div className="game">
        <Board squares={current.squares} clickHandler={(i) => this.handleSquareClick(i)} />
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}