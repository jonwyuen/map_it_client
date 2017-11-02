import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

class Map extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.initMap();
  // }

  // initMap(lat, long, zoom) {
  //   lat = lat || 15;
  //   long = long || -15
  //   let map = new google.maps.Map(this.map, {
  //     center: {
  //       lat: lat,
  //       lng: long
  //     },
  //     zoom: zoom,
  //     mapTypeId: google.maps.MapTypeId.HYBRID,
  //     disableDefaultUI: true,
  //     zoomControl: true,
  //     streetViewControl: true,
  //     rotateControl: true
  //   });
  //   map.setOptions({ minZoom: 3, maxZoom: 20 });
  // }

  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap defaultZoom={3} defaultCenter={{ lat: 10, lng: 10 }} />
      ))
    );
    return (
      <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCq7BzFiy1D0t2BD3_K9eRHqK8I5uatyxg"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}

export default Map;
