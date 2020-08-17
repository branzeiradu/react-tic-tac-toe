class Board extends React.Component {

  renderSquare(i) {
    console.log("render square " + i);

    let boardClickhandler = null;
    if (this.props.clickHandler) {
      boardClickhandler = () => { this.props.clickHandler(i) };
    }

    const squares = this.props.winning_squares;
    const hasWinningSquares = !!squares;
    const isHighlighted = hasWinningSquares && squares.includes(i);


    return (
      <Square
        key={i}
        highlighted={isHighlighted}
        value={this.props.squares[i]}
        onClickHandler={
          () => { this.props.clickHandler(i); }
        }
      />
    );
  }







  render() {

    const boardSize = 3;
    let squares = [];
    for (let i = 0; i < boardSize; ++i) {
      let row = [];
      for (let j = 0; j < boardSize; ++j) {
        let square = this.renderSquare(i * boardSize + j);
        row.push(square);
      }
      console.log("new_row:" + row);
      console.log(row);
      squares.push(<div key={i} className="board-row">{row}</div>);
    }



    return (



      <div className="game-board" >{squares}</div>
    );
  }
}