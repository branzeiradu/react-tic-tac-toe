
class Square extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="square" onClick={ this.props.onClickHandler }>
        {this.props.value}
      </button>
    );
  }
}