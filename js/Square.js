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
    const handler = this.props.onClickHandler;

    return (
      <button
        className={ sqrClsName } onClick={ !!handler ? handler : undefined }>
        {this.props.value}
      </button>
    );
  }
}