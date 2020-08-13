//import { Board } from "Board.js";
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Board />
        
        <div className="game-info">
          <div> game status </div>
          <ol>game history changes </ol>
        </div>
      </div>
    );
  }
}
