import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import * as actions from '../../actions';
import { useDispatch } from 'react-redux';

const Payments = () => {
  const dispatch = useDispatch();

  const handleReceivePaymentToken = tokenObj => {
    dispatch(actions.handleToken(tokenObj));
  };

  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 emails credits"
      amount={500}
      token={handleReceivePaymentToken}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
