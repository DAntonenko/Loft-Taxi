import React from 'react';
import PropTypes, { exact } from 'prop-types';
import { connect } from 'react-redux';
import { getAddressesList } from '../../store/actions/addresses';
import Button from '../Button/Button';

import './TaxiOrdering.scss';

export const TaxiOrdering = ({ addresses }) => {
  TaxiOrdering.propTypes = {
    addresses: PropTypes.arrayOf(exact({
      value: PropTypes.string,
      label: PropTypes.string,
    }))
  }

  return (
    <form className='taxi-ordering'>
      <select className='taxi-ordering__select' name='routeStart'>
        {addresses.map(address => address.hasOwnProperty('value') && <option key={address.value} value={address.value}>{address.value}</option>)}
      </select>
      <select className='taxi-ordering__select' name='routeStart'>
        {addresses.map(address => address.hasOwnProperty('value') && <option key={address.value} value={address.value}>{address.value}</option>)}
      </select>
      <Button type='submit' standardAppearance text='Заказать' />
    </form>
  )
};

const mapStateToProps = function (state) {
  return {
    addresses: state.addresses.addresses,
  }
}

export default connect(mapStateToProps, {getAddressesList})(TaxiOrdering);
