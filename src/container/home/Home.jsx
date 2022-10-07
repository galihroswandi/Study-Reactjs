import React, { useState, Component } from 'react'
import Product from '../product/Product'
import LifecycleComp from '../../components/LifecycleComp'

class Home extends Component {
  state = {
    showComponent: true,
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       showComponent: false,
  //     })
  //   }, 2000)
  // }

  render() {
    return <div>{this.state.showComponent ? <LifecycleComp /> : null}</div>
  }
}

export default Home
