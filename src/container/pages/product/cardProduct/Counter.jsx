import React, { Component } from "react";
import { connect } from 'react-redux';

class Counter extends Component {
    // state = {
    //     order: 1,
    // }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render() {
        return (
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" name="" id="" value={this.props.order} />
                <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order : state.totalOrder
    }
}

export default connect(mapStateToProps)(Counter);