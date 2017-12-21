import { TabContent, Tab, Tablink, TabNav } from './';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.selectedIndex || 0 };
  }

  clickTab = (id) => {
    this.setState({ id });
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.selectedIndex !== nextProps.selectedIndex) {
      this.setState({ id: nextProps.selectedIndex });
    }
  }

  render() {
    const tabs = this.props.children
      .filter(child => child.type === Tab)
      .reduce((prev, next) => [...prev, ...next.props.children], []);

    const navList = tabs.filter(tab => tab.type === Tablink);
    const tabContents = tabs.filter(tab => tab.type === TabContent);
    return (
      <div className="tabs">
        <TabNav
          select={this.clickTab}
          activeIndex={this.state.id}
        >
          {navList}
        </TabNav>
        {tabContents[this.state.id]}
      </div>
    );
  }
}

Tabs.propTypes = {
  selectedIndex: PropTypes.number,
  children: PropTypes.array.isRequired
};

Tabs.defaultProps = { selectedIndex: 0 };
