import { Header } from 'partials/header';
import { Main } from 'partials/main';
import { Content } from 'partials/content';
import { Footer } from 'partials/footer';
import { Pages } from './pages';

import './app.scss';

export const App = () => (
  <div className="wrapper">
    <Header />
    <Main>
      <Content>
        <Pages />
      </Content>
    </Main>
    <Footer />
  </div>
);
