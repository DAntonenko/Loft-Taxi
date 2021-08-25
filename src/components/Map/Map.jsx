import React from 'react';
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

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div className='map' ref={el => this.mapContainer = el} />;
  }
}

export default Map;