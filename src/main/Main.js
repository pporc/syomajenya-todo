import './main.scss';

import { Aside } from './aside';
import { Content } from './content';
import { Number } from '../number';
import { Tabs } from '../tabs';

const tabs = [
  { id: 0, title: 'Tab 1', content: 'Some text is here' },
  { id: 1, title: 'Tab 2', content: 'Another content' },
  { id: 2, title: 'Tab 1', content: 'Third text' }
];

export const Main = () => (
  <main className="main">
    <Aside />
    <Content />
    <Number
      from={3}
      to={9}
      odd
    />
    <Tabs
      tabs={tabs}
    />

  </main>
);
