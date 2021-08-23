import React from 'react';
import { withAuth } from '../../AuthContext';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';

import './OrderPage.scss';

class OrderPage extends React.Component {
  state = {currentMode: 'order'};

  render() {
    const { currentMode } = this.state;

    const onMapClickHandler = () => this.setState({currentMode: 'order'});
    const onProfileClickHandler = () => this.setState({currentMode: 'profile'});

    return (
      <div className='order-page'>
        <Header
          passedOnMapClickHandler = {onMapClickHandler}
          passedOnProfileClickHandler = {onProfileClickHandler}
        />
        { currentMode === 'order' && <p>Заказать такси</p> }
        { currentMode === 'profile' && <p>Профиль</p> }
        <Map />
      </div>
    )
  }
}

const OrederPageWithAuth = withAuth(OrderPage);

export default OrederPageWithAuth;