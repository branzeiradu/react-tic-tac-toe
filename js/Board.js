//import { Square } from "Square.js";
class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isNextX: true
    }
  }

  renderSquare(i) {
    console.log("square " + i + " rendered");
    return (
      <Square
        value={this.state.squares[i]}
        onClickHandler={
          () => { this.handleClick(i); }
        }
      />
    );
  }

  handleClick(i) {
    /* window.alert("Square: " + i + " has been clicked !"); */
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    /*squares[i]= this.state.isNextX ? "X" : "O";*/
    squares[i] = this.getPlayer();
    this.setState({ squares: squares });
    const next = !this.state.isNextX;
    this.setState({ isNextX: next });

  }
  getPlayer() {
    return (this.state.isNextX ? "X" : "O");
  }

  render() {

    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + this.getPlayer();
    }


    /* var status="Next player: " +  this.getPlayer() ; */

    return (
      <div className="game-board">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
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