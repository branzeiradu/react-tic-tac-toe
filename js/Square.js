
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

  updateState() {
    this.setState({ value: "X" });
  }
  render() {
    return (
      <button className="square" onClick={() => { this.updateState(); }}>
        {this.state.value}
      </button>
    );
  }
}