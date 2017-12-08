import { TabContent, Tab, Tablink, Tabs } from 'components/tabs';

import './content.scss';

export const Content = () => (
  <section className="content">
    <Tabs>
      <Tab>
        <Tablink title="Link 1" />
        <TabContent>
          <h1>I am tab 1</h1>
          <p>Lorem ipsum</p>
        </TabContent>
      </Tab>

      <Tab>
        <Tablink title="Link 2" />
        <TabContent>
          <h1>I am tab 2</h1>
          <p>Lorem ipsum</p>
        </TabContent>
      </Tab>
    </Tabs>
  </section>
);
