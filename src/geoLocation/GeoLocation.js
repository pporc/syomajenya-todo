export class GeoLocation extends React.Component {
  constructor() {
    super();
    this.state = { location: null };
  }

  location = () => {
    navigator.geolocation.getCurrentPosition((info) => {
      this.setState({ location: info });
    });
  }

  render() {
    const { location } = this.state;
    return (
      <div>
        <button onClick={this.location}>Where I</button>
        { location &&
          <p>
            {`latitude: ${location.coords.latitude} longitude: ${location.coords.longitude}`}
          </p>
        }
      </div>
    );
  }
}