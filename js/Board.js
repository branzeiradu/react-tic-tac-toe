//import { Square } from "Square.js";
class Board extends React.Component {
  renderSquare(i) {
    console.log("square " + i);
    return (
      <Square value={i} />

    );
  }


  render() {
    var status = "Next player: X";

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