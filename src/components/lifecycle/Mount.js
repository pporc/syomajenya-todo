import PropTypes from 'prop-types';

export class Mount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'init',
      color: '#ccc'
    };

    this.updateStatus = this.updateStatus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.code === 0) return this.setState({ color: '#ccc' });
    if (nextProps.code % 3 === 0 && nextProps.code % 5 === 0) return this.setState({ color: '#0ff' });
    if (nextProps.code % 3 === 0) return this.setState({ color: 'green' });
    if (nextProps.code % 5 === 0) return this.setState({ color: 'blue' });

    return this.setState({ color: '#ccc' });
  }

  updateStatus(e) {
    this.setState({ status: `${this.state.status}+` });

    e.preventDefault();
  }

  render() {
    return (
      <code
        id="mount"
        style={{ background: this.state.color }}
      >
        <span>
          The code from props is {this.props.code}<br />
          The code from state is {this.state.status}
        </span>
        <button onClick={this.updateStatus} >Update status</button>
      </code>
    );
  }
}

Mount.propTypes = { code: PropTypes.number.isRequired };
