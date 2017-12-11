import './userSettings.scss';

export class UserSettings extends React.Component {
  constructor() {
    super();
    this.state = { display: false };
  }

  render() {
    const { display } = this.state;
    return (
      <div className="userSettings">
        <a
          href="#"
          onClick={() => this.setState({ display: !display })}
        >
          <i
            className="fas fa-user-circle"
            style={{ marginRight: '10px' }}
          />
          User
        </a>
        <div className="userModal" style={{ display: display === true ? 'flex' : 'none' }}>
          <a href="#">Propfile</a>
          <a href="#">Log out</a>
        </div>
      </div>
    );
  }
}
