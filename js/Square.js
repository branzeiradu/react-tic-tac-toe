class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const isHighlighted=this.props.highlighted;
    let sqrClsName="square";
    if(isHighlighted){
      sqrClsName+=" square_highlighted";
    }

    return (
      <button
        className={ sqrClsName } onClick={this.props.onClickHandler}>
        {this.props.value}
      </button>
    );
  }
}