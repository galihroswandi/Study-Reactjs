import React, { Component, Fragment } from 'react';
import CardProduct from './cardProduct/CardProduct';
// import { connect } from "react-redux";

class Product extends Component {
  // state = {
  //   order: 1,
  // }

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue
  //   })
  // }

  render() {
    return (
      <Fragment>
        <div className="header" style={{marginLeft : "5rem"}}>
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="troley">
            <img src="" alt="" />
            <div className="count">{0}</div>
          </div>
        </div>
        <CardProduct />
      </Fragment>
    )
  }
}

// const mapStateToProps = state => {
//   return{
//     order : state.totalOrder
//   }
// }

// export default connect(mapStateToProps)(Product);
export default Product;
