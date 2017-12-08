import { Button } from 'components/button';
import { ShowText } from 'components/showText';
import { GeoLocation } from 'components/geoLocation';
import { Persons } from './Persons';

import './content.scss';

export class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      users: [],
      posts: []
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

  getPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  showUserInfo = (user) => {
    this.getPosts(user.id);
  }

  render() {
    const { users, loading, posts } = this.state;
    return (
      <section className="content">
        <div>
          <button onClick={this.getUsers}>
            Get users
          </button>

          <Persons
            users={users}
            clickHandler={this.showUserInfo}
          />
          { loading && <span>Loading...</span> }
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                {post.body}
              </li>
            ))}
          </ul>
        </div>
        <div className="buttons">
          <Button />
          <ShowText />
          <GeoLocation />
        </div>
      </section>
    );
  }
}

