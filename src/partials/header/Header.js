import { Navigation } from 'components/navigation';
import { UserSettings } from 'components/userSettings';

import './header.scss';

const list = [
  { name: 'Home', url: '/', icon: 'fas fa-home fa-sm' },
  { name: 'Task list', url: '/tasks', icon: 'fas fa-tasks fa-sm' },
  { name: 'Contacts', url: '/contacts', icon: 'far fa-comments fa-sm' }
];

export const Header = () => (
  <header className="header">
    <a href="#">
      <img src="images/logo.svg" alt="logo" width="70px" />
    </a>
    <Navigation
      list={list}
    />

    <UserSettings />
  </header>
);
