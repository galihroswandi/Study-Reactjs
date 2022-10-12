import React, { Component } from 'react'
import { connect } from 'react-redux'
import GlobalActionType from '../../../../redux/reducer/GlobalActionType'
import { RootContext } from '../../../home/Home'

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
      <RootContext.Consumer>
        {(value) => {
          return (
            <div className="counter">
              <button className="minus" onClick={() => value.dispatch({type : "MINUS_ORDER"})}>
                -
              </button>
              <input type="text" name="" id="" value={value.state.totalOrder} />
              <button className="plus" onClick={() => value.dispatch({type : "PLUS_ORDER"})}>
                +
              </button>
            </div>
          )
        }}
      </RootContext.Consumer>
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

export default Counter
