import './main.scss';

import { Aside } from './aside';
import { Content } from './content';

export const Main = () => (
  <main className="main">
    <Aside />
    <Content />

  </main>
);
