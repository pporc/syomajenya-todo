import './button.scss';

export class Button extends React.Component {
  constructor() {
    super();
    this.state = { btn: '' };
  }

  changeClass = () => {
    if (this.state.btn === 'active') {
      this.setState({ btn: '' });
    } else {
      this.setState({ btn: 'active' });
    }
  }

  render() {
    return (
      <button className={this.state.btn} onClick={this.changeClass}>
        Change class
      </button>
    );
  }
}
