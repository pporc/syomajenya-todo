import './content.scss';

import { Persons } from '../Persons';

export class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      users: []
    };
  }

  getUsers = () => {
    this.setState({
      loading: true,
      users: []
    });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users, loading: false }));
  }

  showUserInfo(user) {
    alert(user.email);
  }

  render() {
    const { users, loading } = this.state;
    return (
      <section className="content">
        <button onClick={this.getUsers}>
          Get users
        </button>

        <Persons
          users={users}
          clickHandler={this.showUserInfo}
        />

        { loading && <span>Loading...</span> }
      </section>
    );
  }
}
