import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  constructor() {
    super();
    this.state = {
      amount: 500
    }
  }
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        amount={this.state.amount}
        token={token => {
          token["amount"] = this.state.amount;
          this.props.handleToken(token)
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        alipay
      >
        <button className="btn">ADD CREDITS</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
