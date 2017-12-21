import './editedItem.scss';

export class EditedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      text: 'edit this text'
    };
  }

  handleBlur = (e) => {
    this.setState({
      hidden: true,
      text: e.target.value
    });
    this.props.onloose(e.target.value);
  }

  handleFocus = (input) => {
    if (input !== null) {
      input.selectionStart = input.value.length;
    }

    return input && input.focus();
  }

  render() {
    const { hidden, text } = this.state;
    return (
      <div className="edited-item">
        { hidden && <span onClick={() => this.setState({ hidden: false })}>{text}</span> }
        { !hidden &&
          <input
            type="text"
            onBlur={this.handleBlur}
            defaultValue={text}
            ref={input => this.handleFocus(input)}
          />
        }
      </div>
    );
  }
}
