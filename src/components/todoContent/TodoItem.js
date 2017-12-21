import './todoContent.scss';

export class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statusContent: false };
  }

  setStatus = (e) => {
    e.preventDefault();
    this.setState({ statusContent: !this.state.statusContent });
  }

  render() {
    const { statusContent } = this.state;
    return (
      <li className={statusContent === true ? 'done' : ''}>

        <p>{this.props.task}</p>

        <a
          href="#"
          onClick={e => this.setStatus(e)}
        >
          <i className="fas fa-check-circle fa-xs" />
        </a>
        <span className="delete"><i className="fas fa-times fa-xs" /></span>
      </li>
    );
  }
}
