import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './TaxiOrdering.scss';

export const TaxiOrdering = ({ routeStartOptions, routeEndOptions}) => {
  TaxiOrdering.propTypes = {
    routeStartOptions: PropTypes.exact({
      "address": PropTypes.arrayOf(PropTypes.string),
    }),
    routeEndOptions: PropTypes.exact({
      "address": PropTypes.arrayOf(PropTypes.string),
    }),
  }
  return (
    <form className='taxi-ordering'>
      <select className='taxi-ordering__select' name='routeStart'>
        {routeStartOptions.addresses.map(address => <option key={address} value={address}>{address}</option>)}
      </select>
      <select className='taxi-ordering__select' name='routeStart'>
        {routeEndOptions.addresses.map(address => <option key={address} value={address}>{address}</option>)}
      </select>
      <Button type='submit' standardAppearance text='Заказать' />
    </form>
  )
};

export default TaxiOrdering;