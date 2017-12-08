import { Navigation } from 'components/navigation';
import { Greeting } from 'components/greeting';

import './header.scss';

export const Header = () => (
  <header className="header">
    <Navigation
      list={['Home', 'Products', 'Contacts']}
    />

    <Greeting
      name="Jenya"
    />
  </header>
);
