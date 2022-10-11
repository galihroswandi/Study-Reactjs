import React, { Component } from "react";
import Counter from "./Counter";

class CardProduct extends Component {
    render() {
        return (
            <div className="card" style={{marginLeft : "4rem"}}>
                <div className="img-thumb-product">
                    <img src="" alt="" />
                </div>
                <p className="product-title">Daging Ayam Lezatos</p>
                <p className="product-price">Rp. 35.000</p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)} />
            </div>
        )
    }
}

export default CardProduct;