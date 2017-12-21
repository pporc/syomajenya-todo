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
    if (e.target.value.length === 0) {
      this.getMyLocation();
    }
    
    if (e.target.name === 'longitude') {
      const value = e.target.value > 180 ? 180 :
        e.target.value < -180 ? -180 : e.target.value;
      this.setState({ longitude: value });
    }

    if (e.target.name === 'latitude') {
      const value = (e.target.value > 90) ? 90 :
        (e.target.value < -90) ? -90 :
        e.target.value;

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
