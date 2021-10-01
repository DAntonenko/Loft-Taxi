import React from 'react';
import { connect } from 'react-redux';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import './Map.scss';

class Map extends React.Component {

  state = {
    lng: 30.31,
    lat: 59.87,
    zoom: 13,
  };

  map = null;
  mapContainer = React.createRef();
  // coordinates = [[30.316273,59.940578],[30.316589,59.940495],[30.322104,59.942886],[30.324488,59.941109],[30.328283,59.940693],[30.326199,59.935318],[30.360826,59.930965],[30.339552,59.90173],[30.341515,59.894806],[30.361811,59.855789],[30.380919,59.818024],[30.379545,59.81636],[30.370289,59.815208],[30.35289,59.81477],[30.3368,59.810448],[30.334572,59.810379],[30.323389,59.812008],[30.32362,59.806255],[30.324347,59.793816],[30.317898,59.790894],[30.280516,59.797192],[30.275146,59.800365],[30.274046,59.800365],[30.272182,59.800652]]

  drawRoute = (map, coordinates) => {
    if (map.getLayer("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }


    map.flyTo({
      center: coordinates[0],
      zoom: 15
    });
   
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates
          }
        }
      },
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8
      }
    });
  };

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Vvcmdlcy1kYW50b24iLCJhIjoiY2tzbWVoeXN2MTV2dDJ6cW9zYnBrb2gxZyJ9.Ux2mj4Ia7bH9tn65b4BVtg';

    const { lng, lat, zoom } = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  }

  componentDidUpdate() {
    this.drawRoute(this.map, this.props.coordinates);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div className='map' ref={el => this.mapContainer = el} />;
  }
}

const mapStateToProps = function (state) {
  return {
    coordinates: state.map.routePoints
  }
}

export default connect(mapStateToProps)(Map);