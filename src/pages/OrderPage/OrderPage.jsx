import React from 'react';
import Header from '../../components/Header/Header';

class OrderPage extends React.Component {
  state = {currentMode: 'order'};

  render() {
    const { currentMode } = this.state;

    const onMapClickHandler = () => this.setState({currentMode: 'order'});
    const onProfileClickHandler = () => this.setState({currentMode: 'profile'});


    return (
      <>
        <Header
          // passedFromAppClickHandler = {passedClickHandler}
          passedOnMapClickHandler = {onMapClickHandler}
          passedOnProfileClickHandler = {onProfileClickHandler}
        />
        { currentMode === 'order' && <p>Заказать такси</p> }
        { currentMode === 'profile' && <p>Профиль</p> }
      </>
    )
  }
}

export default OrderPage;