import { Route, Switch, Redirect } from 'react-router-dom';
import { TaskList } from '../components/taskList';
import { Main } from '../partials/main';
import { Login } from './login';

export class Pages extends React.Component {
  constructor(p) {
    super(p);

    this.state = { isLogin: false, isLoading: false };
  }

  onLogin = (data) => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLogin: true });
    }, 1000);
  }

  render() {
    if (!this.state.isLogin) {
      return (
        <Switch>
          <Route
            path="/login"
            render={() => <Login login={this.onLogin} isLoading={this.state.isLoading} />}
          />
          <Redirect to="/login" />
        </Switch>
      );
    }


    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" exact component={Main} />
        <Route path="/tasks" component={TaskList} />

        <Redirect from="/login" to="/" />

        <Route render={({ location }) => <h1>Requested page {location.pathname} not found</h1>} />
      </Switch>
    );
  }
}
