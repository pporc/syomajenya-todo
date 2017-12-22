export class GeoLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      longitude: 0,
      latitude: 0
    };
  }

  componentDidMount = () => {
    this.getMyLocation();
  }

  getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((info) => {
      this.setState({
        longitude: info.coords.longitude,
        latitude: info.coords.latitude
      });
    });
  }

  location = (e) => {
    const { name, value } = e.target;
    if (value.length === 0) {
      this.getMyLocation();
    }

    if (name === 'longitude') {
      const value = value > 180 ? 180 :
        value < -180 ? -180 : value;
      this.setState({ longitude: value });
    }

    if (e.target.name === 'latitude') {
      const value = (value > 90) ? 90 :
        (value < -90) ? -90 :
        value;

      this.setState({ latitude: value });
    }
  }

  render() {
    const { longitude, latitude } = this.state;
    const src = `http://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
      &zoom=12&size=300x300&sensor=false&language=ru&markers=color:blue|label:S|${latitude},${longitude}`;
    return (
      <div>
        <div>
          <input
            type="text"
            name="longitude"
            value={longitude}
            onChange={this.location}
          />
          <input
            type="text"
            name="latitude"
            value={latitude}
            onChange={this.location}
          />
        </div>
        <img src={src} alt="img" />
      </div>
    );
  }
}
