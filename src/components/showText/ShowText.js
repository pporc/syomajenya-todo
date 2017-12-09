export class ShowText extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
  }

  buttonText = () => (this.state.show === true ? 'hide text' : 'show text')

  render() {
    const { show } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ show: !show })}>{ this.buttonText() }</button>
        { show && <p>Some text</p> }
      </div>
    );
  }
}
