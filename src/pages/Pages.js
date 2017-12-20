import { NotAuthorized } from './notAuthorized';
import { Authorized } from './authorized';

export class Pages extends React.Component {
  constructor(p) {
    super(p);

    this.state = { isLogin: false, isLoading: false };
  }

  onLogin = (data) => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLogin: true });
    }, 3000);
  }

  render() {
    if (!this.state.isLogin) {
      return (
        <NotAuthorized login={this.onLogin} isLoading={this.state.isLoading} />
      );
    }


    return (
      <Authorized />
    );
  }
}
