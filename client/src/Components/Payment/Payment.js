import React, { Component } from 'react';
import Checkout from '../../Checkout';

class Payment extends Component {
  render() {
    return (
      <Checkout
        name={'Genuine Game Gurus'}
        description={'Get Good'}
        amount={10}
      />
    )
  }
}

export default Payment;