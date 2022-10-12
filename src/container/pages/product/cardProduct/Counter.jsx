import React, { Component } from 'react'
import { GlobalConsumer } from '../../../../context/context'

class Counter extends Component {
  // state = {
  //     order: 1,
  // }

  // handleCounterChange = (newValue) => {
  //     this.props.onCounterChange(newValue);
  // }

  // handlePlus = () => {
  //     this.setState({
  //         order: this.state.order + 1
  //     }, () => {
  //         this.handleCounterChange(this.state.order);
  //     })
  // }

  // handleMinus = () => {
  //     if (this.state.order > 0) {
  //         this.setState({
  //             order: this.state.order - 1
  //         }, () => {
  //             this.handleCounterChange(this.state.order);
  //         })
  //     }
  // }

  render() {
    return (
      <div className="counter">
        <button className="minus" onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}>
          -
        </button>
        <input type="text" name="" id="" value={this.props.state.totalOrder} />
        <button className="plus" onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}>
          +
        </button>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: GlobalActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: GlobalActionType.MINUS_ORDER }),
//   }
// }

export default GlobalConsumer(Counter)
