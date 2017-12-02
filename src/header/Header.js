import { Navigation } from '../navigation';
import { Greeting } from './greeting';
import { Time } from '../time';
import './header.scss';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  render() {
    const { show } = this.state;
    return (
      <header className="header">
        <Navigation
          list={['Home', 'Products', 'Contacts']}
        />

        <div>
          { show && <Time />}

          <button
            onClick={() => this.setState({ show: !show })}
          >
            { show ? 'hide' : 'show'}
          </button>
        </div>

        <Greeting
          name="Jenya"
        />
      </header>
    );
  }
}
