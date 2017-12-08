export class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.intervalId = setInterval(() => this.setState({ date: new Date() }));
  }

  componentWillUnmount() {
    clearTimeout(this.intervalId);
  }

  render() {
    const { date } = this.state;

    return (
      <time>
        {
          `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}
          ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }
      </time>
    );
  }
}
