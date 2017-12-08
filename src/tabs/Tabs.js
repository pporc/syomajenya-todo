import { TabContent, Tab, Tablink, TabNav } from './';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
  }

  clickTab = (id) => {
    this.setState({ id });
  }

  render() {
    const tabs = this.props.children
      .filter(child => child.type === Tab)
      .reduce((prev, next) => [...prev, ...next.props.children], []);

    const navList = tabs.filter(tab => tab.type === Tablink);
    const tabContents = tabs.filter(tab => tab.type === TabContent);

    return (
      <TabNav select={this.clickTab}>{navList}</TabNav>
    );
  }
}
