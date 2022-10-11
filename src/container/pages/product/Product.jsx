import React, { Component, Fragment } from 'react';
import CardProduct from './cardProduct/CardProduct';

class Product extends Component {
  state = {
    order: 1,
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }

  render() {
    return (
      <Fragment>
        <div className="header" style={{marginLeft : "5rem"}}>
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="troley">
            <img src="" alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    )
  }
}

export default Product
