import { Route, Switch, Redirect } from 'react-router-dom';
import { TaskList } from 'components/taskList';
import { Home } from 'pages/home';
import { NotFound } from '../notFound';

export const Authorized = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/tasks" component={TaskList} />

    <Redirect from="/login" to="/" />

    <Route render={({ location }) => <NotFound pathname={location.pathname} />} />
  </Switch>
);
