import React, { Component } from 'react';
import Checkout from '../../Checkout';

class Payment extends Component {
  render() {
    return (
      <Checkout
        name={'The Road to learn React'}
        description={'Only the Book'}
        amount={1}
      />
    )
  }
}

export default Payment;