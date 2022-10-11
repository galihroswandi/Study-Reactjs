import React, { Component, Fragment } from 'react'

class Product extends Component {
  state = {
    order: 1,
  }

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="troley">
            <img src="" alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <div className="card">
          <div className="img-thumb-product">
            <img src="" alt="" />
          </div>
          <p className="product-title">Daging Ayam Lezatos</p>
          <p className="product-price">Rp. 35.000</p>
          <div className="counter">
            <button className="minus">-</button>
            <input type="text" name="" id="" value={3} />
            <button className="plus">+</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Product
